/* eslint-disable no-useless-constructor */
import React from "react";
import "./style.css";
import hero from "../../assets/images/hero.png";
import Dialog from "@material-ui/core/Dialog";
import { check_email, form_structure } from "./utils";
import Grid from "@material-ui/core/Grid";
import { checkbox, CHECKBOX, input, INPUT, SELECT, select } from "../../utils/form_elements";
import { Formik } from "formik";
import axios from "axios";import dotenv from "dotenv";
dotenv.config();

let form_url = process.env.REACT_APP_FORM_URL;

const default_pre_heading = "award winning";
const default_main_heading = "Digital Marketing Agency";
const default_para_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: false,
      formInitial: {
        email: "",
        first_name: "",
        last_name: "",
        accept: false
      },
    };
    this.openContact = this.openContact.bind(this);
    this.closeContact = this.closeContact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  openContact() {
    this.setState({
      ...this.state,
      contact: true,
    });
  }

  closeContact() {
    this.setState({
      ...this.state,
      contact: false,
    });
  }

  onSubmit(e) {
    let form = new FormData();
    form.append("Work Email", e.email );
    form.append("First Name", e.first_name );
    form.append("Last Name", e.last_name);
    axios({
      method: "post",
      url: form_url,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    }).then(result =>{
      alert("Form Submitted");
      this.closeContact();
    }).catch(err=>{
      alert("Unable To Submit Form... Try again later!!!");
    })
  }

  validateForm(values) {
    let errors = {};
    if (!values.first_name) {
      errors.first_name = "* required";
    }

    if (!values.last_name) {
      errors.last_name = "* required";
    }

    if (!values.email) {
      errors.email = "* required";
    } else if (!check_email(values.email)) {
      errors.email = " invalid email";
    }

    if (!values.accept) errors.accept = "*";

    return errors;
  }

  render_field(field, formik) {
    let props = {
      value: formik.values[field.name] || "",
      error: formik.errors[field.name],
      touched: formik.touched[field.name],
      handleChange: formik.handleChange,
      handleBlur: formik.handleBlur,
      options: field.options,
    };
    let fieldJSX = <></>;
    if (field.as === INPUT) fieldJSX = input({ ...field, ...props });
    if (field.as === SELECT) fieldJSX = select({ ...field, ...props });
    if (field.as === CHECKBOX) fieldJSX = checkbox({ ...field, ...props });
    if (field.multiple && Array.isArray(field.child)) {
      fieldJSX = (
        <>{field.child.map((child) => this.render_field(child, formik))}</>
      );
    }
    if (field.as === INPUT) fieldJSX = input({ ...field, ...props });

    return (
      <Grid container key={field.name} item xs={field.xs} md={field.md}>
          {fieldJSX}
      </Grid>
    );
  }

  render_form(formik) {
    let form = (
      <Grid container item xs={12} spacing={2}>
        {form_structure.map((field) => {
          return this.render_field(field, formik);
        })}
      </Grid>
    );
    return form;
  }

  render() {
    let pre_heading = this.props.pre_heading
      ? this.props.pre_heading
      : default_pre_heading;
    let main_heading = this.props.main_heading
      ? this.props.main_heading
      : default_main_heading;
    let para_text = this.props.para_text
      ? this.props.para_text
      : default_para_text;

    return (
      <div className="contact-form">
        <div className="contact-form-content">
          <div>
            <h6>{pre_heading}</h6>
            <h1>{main_heading}</h1>
            <p>{para_text}</p>
            <button onClick={this.openContact}>Contact Us</button>
          </div>
        </div>
        <div
          className="contact-form-image"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <Dialog
          open={this.state.contact}
          onClose={this.closeContact}
          aria-labelledby="contact us"
          maxWidth="xs"
        >
          <Formik
            enableReinitialize
            initialValues={this.state.formInitial}
            initialStatus={this.state.formInitial}
            onSubmit={this.onSubmit}
            validate={this.validateForm}
          >
            {(formik) => {
              window.submitform = () => {
                formik.submitForm();
              };
              return (
                <form
                  onReset={formik.handleReset}
                  id="contact_form"
                  action="#"
                  onSubmit={formik.handleSubmit}
                  className="contact-modal"
                >
                    <Grid
                      container
                      item
                      xs={12}
                      spacing={1}
                      justify="space-around"
                    >
                      <Grid item xs={12} >
                        <h1>Talk to us</h1>
                      </Grid>
                      {this.render_form(formik)}
                    </Grid>
                  <button disabled = {!formik.isValid}>Contact Us</button>
                </form>
              );
            }}
          </Formik>
        </Dialog>
      </div>
    );
  }
}