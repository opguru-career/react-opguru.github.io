import React from "react";
import Back from "../common/back/Back";
import "./about.css";
import collage from './collage.jpg'

const About = () => {
  return (
    <>
      <Back title="About Us" />

      <section id="about-container">
        <div className="about-img">
          <img
            src={collage}
            alt=""
            className="about-image"
          />
        </div>

        <div className="about-text">
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            quibusdam iusto provident!
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa
            dolore reprehenderit eligendi iure necessitatibus blanditiis
            assumenda optio animi repudiandae? Amet itaque cumque illum odio?
            Tempore, modi excepturi iste quibusdam mollitia ullam dicta nihil.
            Aperiam, consectetur minus adipisci laboriosam repellat.
          </p>

          <div className="about-fe">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-college-american-football-flaticons-lineal-color-flat-icons.png"
              alt=""
            />

            <div className="fe-text">
              <h5>More than 500+ colleges</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                neque ducimus dolores ex rem nihil. Quia minima aliquid
                obcaecati architecto repudiandae eligendi error.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
