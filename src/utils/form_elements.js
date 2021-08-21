import { FormControl, Input, InputLabel, Select } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export function input({
  label,
  name,
  type,
  error,
  value,
  touched,
  disabled,
  handleChange,
  handleBlur
}) {
  let labelJSX = <></>;
  if (label !== undefined)
    labelJSX = <InputLabel htmlFor={name}>{label.toString()}</InputLabel>;
  return (
    <FormControl fullWidth={true} error={error && touched ? true : false}>
      {labelJSX}
      <Field
        as={Input}
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        fullWidth
      />

      <ErrorMessage component="FormHelperText" name={name}>
        {(errorMsg) => <small style={{ color: "red" }}> {errorMsg} </small>}
      </ErrorMessage>
    </FormControl>
  );
}

export function select({
  label,
  name,
  type,
  error,
  value,
  touched,
  options,
  disabled,
  handleChange,
  handleBlur,
}) {
  let labelJSX = <></>;
  if (label !== undefined)
    labelJSX = (
      <InputLabel
        className="label_text"
        htmlFor={name}
      >
        {label.toString()}
      </InputLabel>
    );
  return (
    <FormControl fullWidth={true} error={error && touched ? true : false}>
      {labelJSX}
      <Field
        as={Select}
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      >
        {options.map((val, index) => (
          <MenuItem key={index} value={val}>
            {val}
          </MenuItem>
        ))}
      </Field>

      <ErrorMessage component="FormHelperText" name={name}>
        {(errorMsg) => <small style={{ color: "red" }}> {errorMsg} </small>}
      </ErrorMessage>
    </FormControl>
  );
}

export function checkbox({
  label,
  name,
  placement,
  error,
  value,
  touched,
  disabled,
  handleChange,
  handleBlur,
  padding
}) {
  return (
    <FormControlLabel
      control={
        <>
          <Checkbox
            className="form-control"
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            fullWidth
          />
          <ErrorMessage component="FormHelperText" name={name}>
            {(errorMsg) => (
              <small
                style={{ color: "red", position: "relative", top: "-4px" }}
              >
                {" "}
                {errorMsg}{" "}
              </small>
            )}
          </ErrorMessage>
        </>
      }
      label={label}
      labelPlacement={placement || "end"}
      classes={{
        label: `label_text padding-${padding}`,
      }}
    />
  );
}

export const INPUT = "INPUT";
export const SELECT = "SELECT";
export const CHECKBOX = "CHECKBOX";