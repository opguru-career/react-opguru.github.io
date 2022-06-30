import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./login.css";

const Reset = () => {
  const [phvalue, setPhvalue] = useState();
  const [values, setValues] = useState({
    email: "",
    otp: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //redirect to home page
  const history = useNavigate();

  //show otp area
  const [show, setShow] = useState(false);

  //Disable a button
  const [disable, setDisable] = useState(false);

  //hide the button
  const [hide, setHide] = useState(true);

  //Timer
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter - 1);
        if (counter == 0) {
          setCounter(0);
          setIsActive(true);
          setDisable(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const reset = (
    <>
      <div className="body1">
        <div className="container">
          <form action="" className="login active">
            <h2 className="title">Sign Up</h2>

            <div className="form-group">
              <label for="email">Phone Number</label>
              <div class="input-group">
                <PhoneInput
                  disabled={disable}
                  name="number"
                  className="countryCode"
                  placeholder="Enter phone number"
                  initialValueFormat="national"
                  value={phvalue}
                  onChange={setPhvalue}
                />
              </div>
              <span id="timer" class="help-text">
                {minute}:{second} seconds
              </span>
            </div>

            {hide ? (
              <button
                disabled={disable}
                onClick={() => {
                  if (phvalue != "") {
                    setIsActive(!isActive);
                    setDisable(true);
                    setShow(true);
                    setHide(false);
                  } else {
                    alert("Enter email address");
                  }
                }}
                type="button"
                className="btn-submit"
                id="code"
              >
                Send code
              </button>
            ) : null}
            {show && (
              <>
                <div className="form-group">
                  <label for="email">OTP</label>
                  <div class="input-group">
                    <input
                      name="otp"
                      value={values.otp}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (values.otp === "1234") {
                      history("/signup");
                    } else if (values.otp == "") {
                      alert("Enter otp");
                    } else if (values.otp != "1234") {
                      alert("Enter correct otp");
                    }
                  }}
                  type="button"
                  className="btn-submit"
                >
                  Verify
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );

  return reset;
};

export default Reset;
