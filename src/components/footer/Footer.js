import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap surface-800 shadow-6 align-items-start justify-content-around m-6">
        <div className="flex flex-wrap flex-column border-round mt-4 mb-4 p-2 justify-content-around align-content-around">
          <div>
            <h2>ABOUT ME</h2>
          </div>
          <div>
            <p className="text-lg line-height-4">
              <i className="pi pi-user"></i> I am a Developer :D
            </p>
          </div>
          <div>
            <p className="text-lg line-height-4">
              living in Buenos Aires, Argentina
            </p>
          </div>
          <div>
            <p className="text-lg line-height-4">
              and I <i className="pi pi-heart"></i> Javascript.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-column mt-4 mb-4 border-round justify-content-center">
          <div>
            <h2>MY SOCIAL MEDIA</h2>
          </div>
          <div className="flex flex-wrap mt-4 border-round justify-content-between">
            <div>
              <i className="pi pi-github text-3xl"></i>
            </div>
            <div>
              <i className="pi pi-linkedin text-3xl"></i>
            </div>
            <div>
              <i className="pi pi-instagram text-3xl"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-column mt-4 mb-4 border-round justify-content-around align-content-start">
          <div>
            <h2>CONTACT ME</h2>
          </div>
          <div>
            <span className="p-input my-2">
              <InputText placeholder="Search" />
            </span>
          </div>
          <div>
            <Button
              className="p-button-raised my-2"
              label="Send"
              icon="pi pi-send"
              iconPos="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
