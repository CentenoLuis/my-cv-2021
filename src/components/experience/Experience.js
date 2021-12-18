import React from "react";
import { myProjects } from "../assets/projects";

const Experience = () => {
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
          My projects
        </h1>

        {myProjects.map((project, index) => {
          let classAnimation = "";
          if (index === 0 || index === 2)
            classAnimation = "border-round fadeinleft animation-duration-500 ";
          else if (index === 1 || index === 3)
            classAnimation = "border-round fadeinleft animation-duration-500 ";
          return (
            <div className="flex flex-wrap mx-4 my-2 px-2 align-items-around justify-content-start">
              <div className={classAnimation}>
                <div>
                  <img
                    alt="Card"
                    src={project.image}
                    style={{
                      borderRadius: "12px",
                      width: "80%",
                      height: "200px",
                    }}
                  />
                </div>
                <h2>{project.title}</h2>
                <h2>
                  <i className="pi pi-github"></i>
                  <a href={project.github} target="blank">
                    Link
                  </a>
                </h2>
                <p className="text-lg line-height-4">
                  <i className="pi pi-clock"></i>
                  {" " + project.hours}
                </p>
              </div>
              <div className="flex flex-wrap flex-column my-4 align-items-start">
                <div className="surface-800 shadow-6 border-round  p-2 fadeinleft animation-duration-500">
                  <h2>Tasks / Achivements</h2>

                  {project.task.map((tsk) => {
                    return (
                      <p className="text-lg line-height-4">
                        <i className="pi pi-box"></i>
                        {" " + tsk}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-wrap surface-800 shadow-6 border-round my-4 fadeinleft animation-duration-500">
                  {project.technologies.map((tech) => {
                    return (
                      <div className="my-2 mx-2">
                        <img
                          src={tech}
                          alt=""
                          style={{
                            clipPath: "circle(50.0% at 50% 50%)",
                            width: "auto",
                            height: "50px",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
