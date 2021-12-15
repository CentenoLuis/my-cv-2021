import React, { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { myJobs } from "../assets/myJobs";

const TimelineDemo = () => {
  const [displayPosition, setDisplayPosition] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayPosition: setDisplayPosition,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Close" icon="pi pi-check" onClick={() => onHide(name)} />
      </div>
    );
  };

  const customizedMarker = (item) => {
    return (
      <span
        className="custom-marker p-shadow-2"
        style={{ backgroundColor: "var(--blue-900)" }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    console.log(item);
    return (
      <>
        <Card title={item.company} subTitle={item.title} className="p-1">
          <h2>{item.location}</h2>
          <h2>
            {item.start} - {item.end}
          </h2>
          <div className="p-0 mt-5 mb-0">
            <Button
              label="Tasks"
              icon="pi pi-folder"
              onClick={() => onClick("displayPosition", "right")}
              className="p-button"
            ></Button>
          </div>
        </Card>
      </>
    );
  };

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
          Work Experience
        </h1>
        <div className="timeline-demo">
          <div className="card">
            <Timeline
              value={myJobs}
              align="alternate"
              className="customized-timeline"
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        </div>
        <Dialog
          header="Tasks"
          visible={displayPosition}
          position={position}
          modal
          style={{ width: "50vw" }}
          breakpoints={{ "960px": "75vw" }}
          footer={renderFooter("displayPosition")}
          onHide={() => onHide("displayPosition")}
          draggable={false}
          resizable={true}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            sapiente necessitatibus doloribus ut? Ad nemo dolor explicabo odio
            accusamus officia non eveniet laboriosam optio magnam modi eligendi
            possimus, alias soluta!
          </p>
        </Dialog>
      </div>
    </>
  );
};

export default TimelineDemo;
