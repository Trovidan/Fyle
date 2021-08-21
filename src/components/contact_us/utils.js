/* eslint-disable no-useless-escape */
import { CHECKBOX, INPUT } from "../../utils/form_elements";

export const check_email = (val) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val);
};

export const form_structure = [
  {
    label: "Work Email",
    name: "email",
    type: "email",
    as: INPUT,
    xs: 12,
    md: 12,
  },
  {
    label: "First Name",
    name: "first_name",
    type: "text",
    as: INPUT,
    xs: 6,
    md: 6,
  },
  {
    label: "Last Name",
    name: "last_name",
    type: "text",
    as: INPUT,
    xs: 6,
    md: 6,
  },
  {
    label:
      "I agree to Fyle's terms and conditions, and provide consent to send me communication.",
    name: "accept",
    as: CHECKBOX,
    xs: 12,
    md: 12,
    padding: 12
  },
];