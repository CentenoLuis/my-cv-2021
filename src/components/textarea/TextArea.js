import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const TextArea = () => {
  const [value2, setValue2] = useState("");

  return (
    <div>
      <div>
        <h1
          style={{
            marginTop: "40px",
            marginBottom: "10px",
            fontSize: "40px",
          }}
          align="center"
        >
          Send me a message
        </h1>
      </div>
      <div className="flex flex-wrap justify-content-center align-items-center">
        <div className="m-3 p-3">
          <div className="mb-1">
            <h5>Type your message</h5>
          </div>
          <InputTextarea
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            rows={5}
            cols={30}
            autoResize
          />
        </div>

        <div className="m-3 p-3">
          <Button
            className="p-button-raised my-1"
            label="SEND"
            icon="pi pi-send"
            iconPos="left"
          />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
