import React from "react";

const About = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: "40px",
          marginBottom: "10px",
          fontSize: "40px",
        }}
        align="center"
      >
        About Me
      </h1>
      <div className="flex flex-wrap justify-content-start mx-4 my-4">
        <div>
          <h4
            className="surface-800 border-round mx-4 px-2 py-2 my-5"
            align="left"
          >
            I am Electronic Engineer. With 3+ years of experience in software
            development.
          </h4>
        </div>

        <div>
          <h4
            className="surface-800 border-round mx-5 px-2 py-2 my-3"
            align="right"
          >
            I like to be Profesional in every aspect of my life.
          </h4>
        </div>

        <div>
          <h4
            className="surface-800 border-round mx-2 px-2 py-2 my-1"
            align="center"
          >
            I am very Eficcent. I focus in achive the goals everyday.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
