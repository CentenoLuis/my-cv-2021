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
            classAnimation =
              "border-round fadeinleft animation-duration-500 mx-1";
          else if (index === 1 || index === 3)
            classAnimation =
              "border-round fadeinleft animation-duration-500 mx-1";
          return (
            <div className="flex flex-wrap mx-2 my-5 ">
              <div className={classAnimation}>
                <div>
                  <img
                    alt="Card"
                    src={project.image}
                    style={{
                      borderRadius: "12px",
                      width: "auto",
                      height: "240px",
                    }}
                  />
                </div>
                <h2>{project.title}</h2>
                <h2>
                  <i className="pi pi-github"></i>
                  <a href={project.github} target="blank">
                    {" "}
                    Link
                  </a>
                </h2>
                <p className="text-lg line-height-4">
                  <i className="pi pi-clock"></i>
                  {" " + project.hours}
                </p>
              </div>
              <div className="flex flex-wrap flex-column my-4">
                <div className="surface-800 shadow-6 border-round mx-2 fadeinleft animation-duration-500">
                  <h2>Tasks / Achivements</h2>
                  <p className="text-lg line-height-4">
                    <i className="pi pi-box"></i>
                    {" " + project.task[0]}
                  </p>
                  <p className="text-lg line-height-4">
                    <i className="pi pi-box"></i>
                    {" " + project.task[1]}
                  </p>
                  <p className="text-lg line-height-4">
                    <i className="pi pi-box"></i>
                    {" " + project.task[2]}
                  </p>
                </div>
                <div className="flex flex-wrap surface-800 shadow-6 border-round my-4 mx-0 fadeinleft animation-duration-500">
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
