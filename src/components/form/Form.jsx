import React, { useState, useEffect } from "react";

import csc from "country-state-city";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { ValidateForm } from "./ValidateForm";

const Form = () => {
  const [config, setConfig] = useState({ country: "", state: "", city: "" });

  const [countries, setCounties] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  //for country
  useEffect(() => {
    const data = csc.getAllCountries();
    // console.log(data);
    setCounties(data);
  }, []);

  //for states
  useEffect(() => {
    const data = csc.getStatesOfCountry(config.country.isoCode);
    console.log("State is : ", data);

    setStates(data);
  }, [config.country]);

  //for cities
  useEffect(() => {
    const data = csc.getCitiesOfState(
      config.country.isoCode,
      config.state.isoCode
    );
    console.log("City is: ", data);

    setCities(data);
  }, [config.state]);

  const handleConfig = (newObj) => {
    setConfig(newObj);
  };
  //routing the page
  const history = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // history("/about");
    console.log(config);
    if (validation(values)) {
      history("/about");
    }
  };

  //validation
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    conpassword: "",
    phnumber: "",
    quali: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validation = (valuesform) => {
    if (!valuesform.email) {
      alert("Hello");
    }
  };

  return (
    <div className="form">
      <div className="body2">
        <div className="container1">
          {/* {JSON.stringify(config)} */}
          <form className="login-active">
            <h2 className="title1">Registration Form</h2>
            <div className="content1">
              {/* name and gender */}
              <div className="form-row">
                {/* first name */}
                <div className="form-group1 col-md-6">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Tithi"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Enter the email")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                {/* middle name */}
                <div className="form-group1 col-md-6">
                  <label htmlFor="inputEmail4">Middle Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Roy"
                  />
                </div>
                <div className="form-row">
                  {/* last name */}
                  <div className="form-group1 col-md-6">
                    <label htmlFor="inputEmail4">Last Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Kapoor"
                    />
                  </div>
                  <div className="form-group1 col-md-6">
                    <label htmlFor="inputState">Gender</label>
                    <select
                      name="gender"
                      required
                      id="inputState"
                      className="form-control"
                    >
                      <option value="">Choose</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* date of birth */}
              <div className="form-group form-grouplabel col-md-12">
                <label htmlFor="DOB">Date of Birth</label>
                <div className="dropselect dropdown custom-control custom-radio custom-control-inline">
                  {/* day */}
                  <select
                    name="day"
                    id="DOB"
                    required="true"
                    className="custom-select custom-select-sm select1"
                  >
                    <option value="">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  {/* month */}
                  <select
                    id="DOB"
                    required="true"
                    className="custom-select custom-select-sm select1"
                  >
                    <option value="">Month</option>
                    <option value="January">Jan(1)</option>
                    <option value="February">Feb(2)</option>
                    <option value="March">Mar(3)</option>
                    <option value="April">Apr(4)</option>
                    <option value="May">May(5)</option>
                    <option value="June">Jun(6)</option>
                    <option value="July">Jul(7)</option>
                    <option value="August">Aug(8)</option>
                    <option value="September">Sep(9)</option>
                    <option value="October">Oct(10)</option>
                    <option value="November">Nov(11)</option>
                    <option value="December">Dec(12)</option>
                  </select>
                  {/* year */}
                  <select
                    name="year"
                    id="DOB"
                    required="true"
                    className="custom-select custom-select-sm select1"
                  >
                    <option value="">Year</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
                </div>
              </div>
              {/* date of birth ends here */}
              {/* location */}

              {/* {cities.map((city) => (
                <div onClick={() => handleConfig({ ...config, city })}>
                  {city}
                </div>
              ))} */}

              <div className="form-group form-grouplabel col-md-12">
                <label htmlFor="location">Location</label>
                <div className=" dropselect dropdown custom-control custom-radio custom-control-inline">
                  {/* country list */}
                  <select
                    className="select1 selected"
                    id="country"
                    name="country"
                    label="country"
                    onChange={(e) => {
                      console.log(e);
                      handleConfig({
                        ...config,
                        country: JSON.parse(e.target.value),
                        // state: JSON.parse(e.target.value),
                        // city: JSON.parse(e.target.value),
                      });
                    }}
                  >
                    <option value="">Choose</option>
                    {countries.map((country) => (
                      <option
                        //onClick={() => handleConfig({ ...config, country })}
                        value={JSON.stringify(country)}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {/* state list */}

                  <select
                    className="select1 selected"
                    id="state"
                    name="state"
                    label="state"
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleConfig({
                        ...config,
                        // country: JSON.parse(e.target.value),
                        state: JSON.parse(e.target.value),
                        // city: JSON.parse(e.target.value),
                      });
                    }}
                  >
                    <option value="">Choose</option>
                    {states.map((state) => (
                      <option
                        //onClick={() => handleConfig({ ...config, state })}
                        value={JSON.stringify(state)}
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {/* city list */}
                  <select
                    className="select1 selected"
                    id="city"
                    name="city"
                    label="city"
                  >
                    <option value="">Choose</option>
                    {cities.map((city) => (
                      <option
                        //onClick={() => handleConfig({ ...config, city })}
                        value={city}
                      >
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* location ends here */}
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
