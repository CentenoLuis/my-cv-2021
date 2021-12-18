import React, { useState, useRef } from "react";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";

const TextArea = () => {
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const msgs2 = useRef(null);

  const sendDataToMongo = () => {
    if (value2 && value3) {
      const userData = {
        message: value2,
        email: value3,
      };

      msgs2.current.show({
        severity: "success",
        detail: "MESSAGE STORED IN MONGO DB ATLAS",
        sticky: true,
      });

      axios
        .post(`http://localhost:9000/api/users`, userData)
        .then(function (response) {
          return true;
        })
        .catch((err) => console.error(err));
      setValue2("");
      setValue3("");
    } else {
      msgs2.current.show({
        severity: "error",
        detail: "PLEASE FILL BOTH TEXT FIELDS",
        sticky: true,
      });
    }
  };

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
        <div className="flex flex-wrap flex-column">
          <div>
            <div className="mb-1">
              <h3>Type your message</h3>
            </div>

            <InputTextarea
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              rows={5}
              cols={30}
              autoResize
            />
          </div>
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-at" />
              <InputText
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="Enter your email"
              />
            </span>
          </div>
        </div>

        <div className="m-3 p-3">
          <Button
            className="p-button-raised my-1"
            label="SEND"
            icon="pi pi-send"
            iconPos="left"
            onClick={sendDataToMongo}
          />
        </div>
      </div>
      <div>
        <Messages ref={msgs2} />
      </div>
    </div>
  );
};

export default TextArea;
