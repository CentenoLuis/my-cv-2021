import React from "react";
import { Button } from "primereact/button";

const Navbar = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-content-between">
        <div className="flex flex-wrap">
          <i className="pi pi-box" style={{ fontSize: "1.5rem" }}></i>
          <i className="pi pi-minus" style={{ fontSize: "0.75rem" }}></i>
          <i className="pi pi-box" style={{ fontSize: "1.5rem" }}></i>
          <i className="pi pi-minus" style={{ fontSize: "0.75rem" }}></i>

          <h5>LuisCentenoDEV</h5>
        </div>
        <div className="flex flex-wrap ">
          <div>
            <a href="">
              <h4>Experience</h4>
            </a>
          </div>
          <div>
            <div>
              <a href="">
                <h4>Projects</h4>
              </a>
            </div>
          </div>
          <div>
            <div>
              <a href="">
                <h4>About</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
