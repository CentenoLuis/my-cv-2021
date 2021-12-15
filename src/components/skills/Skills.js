import React from "react";
import { Rating } from "primereact/rating";

function Skills() {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-content-between my-4 mx-4">
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Javascript</h2>
            <Rating value={8} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>React</h2>
            <Rating value={7} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Angular</h2>
            <Rating value={3} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Material UI</h2>
            <Rating value={6} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Prime</h2>
            <Rating value={8} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Node JS</h2>
            <Rating value={5} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Mongo Db</h2>
            <Rating value={7} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Express JS</h2>
            <Rating value={8} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>CSS</h2>
            <Rating value={7} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>HTML</h2>
            <Rating value={7} readOnly stars={10} cancel={false} />
          </div>
          <div className="surface-800 shadow-6 mx-2 my-2 px-2 py-2 border-round">
            <h2>Git</h2>
            <Rating value={6} readOnly stars={10} cancel={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
