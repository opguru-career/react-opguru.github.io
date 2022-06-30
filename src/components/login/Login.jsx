import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Validatelogin } from "./Validatelogin";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const history = useNavigate();

  const reset = () => {
    // let path = "/resetPassword";
    // history(path);
    history("/reset");
  };

  const routeChange = () => {
    let path = "/reset";
    history(path);
  };

  //validate login and redirect to home page with correct credentials
  const handle = () => {
    setErrors(Validatelogin(values));

    if (!Validatelogin(values)) {
      history("/");
    }
  };

  return (
    <div>
      <div className="body1">
        <div className="container">
          <form action="" className="login active" id="form_id">
            <h2 className="title">Login with your account</h2>
            <p className="error" id="error"></p>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  placeholder="megan@gmail.com"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter the email")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
                <i class="bx bx-envelope"></i>
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-group">
                <input
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  required
                  type="password"
                  pattern=".{8,}"
                  id="password"
                  oninvalid={(e) =>
                    e.target.setCustomValidity("Enter the passowrd")
                  }
                  oninput={(e) => e.target.setCustomValidity("")}
                  placeholder="password"
                />
                <i class="bx bx-lock-alt"></i>
              </div>
              <span class="help-text">At least 8 characters</span>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button
              type="button"
              class="btn-submit"
              id="button"
              onClick={handle}
            >
              Login
            </button>

            <a onClick={() => reset()}>Forgot Password?</a>
            <p>
              I don't have an account.
              <span onClick={routeChange} className="spanText">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
