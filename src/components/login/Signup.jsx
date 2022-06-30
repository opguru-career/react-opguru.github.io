import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import { ValidateSignup } from "./Validatelogin";

const Signup = () => {
  // validation
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    conpassword: "",
    phnumber: "",
    quali: "",
  });

  const [errors, setErrors] = useState({});
  const handle = (e) => {
    // e.preventDefault();
    setErrors(ValidateSignup(values));

    if (!ValidateSignup(values)) {
      history("/form");
      // console.log(values);
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  //routing the pages
  const history = useNavigate();

  const routeOpp = () => {
    let path = "/";
    history(path);
  };

  const routeChange = () => {
    let path = "/login";
    history(path);
  };
  return (
    <>
      <div className="body1">
        <div className="container">
          <form action="" className="login active">
            <h2 className="title">Sign Up</h2>

            <p id="error1" className="error"></p>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  className="email"
                  placeholder="megan@gmail.com"
                  id="email"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter the email")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              <span class="help-text">Optional</span>
            </div>

            <div className="form-group">
              <label htmlFor="phnumber">Phone number</label>
              <div className="input-group">
                <input
                  required
                  name="phnumber"
                  value={values.phnumber}
                  onChange={handleChange}
                  pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/"
                  type="number"
                  min="1000000000"
                  max="9999999999"
                  className="email"
                  placeholder="8777097681"
                  id="phnumber"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter the phone number")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              {errors.phnumber && <p className="error">{errors.phnumber}</p>}
              <span class="help-text">Type without country code</span>
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <div class="input-group">
                <input
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  type="text"
                  id="username"
                  placeholder="Type username"
                  required
                />
              </div>
              {errors.username && <p className="error">{errors.username}</p>}
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-group">
                <input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  type="password"
                  pattern=".{8,}"
                  id="password1"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter the password")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  class="password"
                  placeholder="password"
                />
                <i class="bx bx-lock-alt"></i>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <span class="help-text">At least 8 characters</span>
            </div>

            <div class="form-group">
              <label for="confirm-password">Confirm Password</label>
              <div class="input-group">
                <input
                  name="conpassword"
                  value={values.conpassword}
                  onChange={handleChange}
                  required
                  type="password"
                  id="confirm-password"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Check the password")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  placeholder="Confirm password"
                />
                <i class="bx bx-lock-alt"></i>
              </div>
              <span class="help-text">Confirm Password</span>
              {errors.conpassword && (
                <p className="error">{errors.conpassword}</p>
              )}
            </div>

            <div class="form-group">
              <label for="password">I am a</label>
              <div class="input-group">
                <select
                  required
                  value={values.quali}
                  onChange={handleChange}
                  className="dropdownForm"
                  name="quali"
                  id=""
                >
                  <option value="">Choose</option>
                  <option value="1">Student</option>
                  <option value="2">Professional</option>
                  <option value="3">Teacher</option>
                  <option value="4">Parents</option>
                </select>
              </div>

              <span class="help-text">At least 8 characters</span>
            </div>

            <div className="form-group">
              <input type="checkbox" />
              <label className="check" htmlFor="">Receive updates on whatsapp</label>
            </div>

            <button onClick={handle} type="button" class="btn-submit">
              Sign Up
            </button>

            <p>
              I already have an account
              <span onClick={routeChange} className="spanText">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
