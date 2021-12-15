import React from "react";
import { logos } from "../assets/logos";

const Portfolio = () => {
  return (
    <>
      <div>
        <h1
          style={{
            paddingTop: "40px",
            fontSize: "40px",
          }}
          align="center"
        >
          My skills
        </h1>
        <div className="flex flex-wrap shadow-6 surface-800 justify-content-around border-round my-2 mx-4">
          <div>
            <img
              src={logos.javascript}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.react}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.angular}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.materialui}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.prime}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.nodejs}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.mongodb}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>

          <div className="my-2 mx-2">
            <img
              src={logos.expressjs}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.css}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.html}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
          <div className="my-2 mx-2">
            <img
              src={logos.git}
              alt=""
              style={{
                clipPath: "circle(50.0% at 50% 50%)",
                width: "auto",
                height: "100px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
