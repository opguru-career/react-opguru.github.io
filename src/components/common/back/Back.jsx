import React from "react";
import { useLocation } from "react-router-dom";
import "../../../App.css";

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className="back">
        <h2>About OpGuru</h2>
      </section>
      {/* <div className="margin"></div> */}
    </>
  );
};

export default Back;
