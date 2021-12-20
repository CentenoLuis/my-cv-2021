import React from "react";
import { forwardRef, useRef } from "react";
import { Button } from "primereact/button";

const Hero = (props) => {
  return (
    <>
      <div>
        <div className="grid grid-nogutter surface-800 text-0 border-round m-3">
          <div className="col-12 md:col-6 overflow-hidden text-center ">
            <img
              src="https://static.collectui.com/shots/3321523/in-search-of-planet-x-large"
              alt="hero-1"
              className="md:ml-auto block border-round-left"
              style={{}}
              align="center"
            />
          </div>

          <div className="col-12 md:col-6 text-center flex align-items-center ">
            <section>
              <section className="m-4 p-4">
                <div className="text-4xl text-0 font-bold mb-3">
                  LuisCentenoDEV
                </div>
                <span className="block  text-100 text-3xl font-bold mb-1">
                  "Research. Execute. Repeat."
                </span>
                <h2 className="mt-0 mb-4 text-400 line-height-1">
                  Electronic engineer with 3+ years of experience in software
                  development.
                </h2>

                <div>
                  <Button
                    className="p-button-raised my-1"
                    label="CONTACT"
                  ></Button>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
