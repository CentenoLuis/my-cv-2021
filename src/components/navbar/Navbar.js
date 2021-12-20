import React from "react";
import { Button } from "primereact/button";

const Navbar = (props) => {
  return (
    <>
      <div
        className="sticky z-2 top-0 font-bold text-0 surface-800 shadow-2 p-4 m-2 border-round"
        style={{ height: "80px" }}
      >
        <div></div>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
