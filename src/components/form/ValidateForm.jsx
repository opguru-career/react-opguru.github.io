import React from "react";

const validateForm = (values) => {
  let errors = {};

  if (!values.email) {
    // errors.email = "Email is required";
    alert("Hello");
  } else if (!values.phnumber) {
    errors.phnumber = "Phone number required";
  } else if (!values.username) {
    errors.username = "Username required";
  } else if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.conpassword) {
    errors.conpassword = "Confirm required";
  } else if (values.password.length < 8) {
    errors.password = "Password should be more than 8 characters";
  } else if (values.password != values.conpassword) {
    errors.conpassword = "Passwords dont match";
  } else if (values.conpassword == values.password) {
    return false;
  }

  return errors;
};

export default validateForm;
