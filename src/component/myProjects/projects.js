import React from "react";
import "./projects.css";
import { useState } from "react";
import ProjectData from "../../Utilities/allProjects";

function Projects() {
  const [menuState, setMenuState] = useState(1);

  const displayContent = (projectObj, index) => {
    return (
      <div className="projectDetails" key={index}>
        <div className="projectHeader">
          <div>
            <h3>{projectObj.projectName}</h3>
            <h4>{projectObj.subHeading}</h4>
          </div>
          <div className="links">
            {projectObj.linkUrl && (
              <a
                href={projectObj.linkUrl}
                target="_blank"
                className="icon-link"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            )}
            <a
              href={projectObj.githubUrl}
              target="_blank"
              className="icon-link"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="projectDiscription">
          <p>{projectObj.discription}</p>
          <p>{projectObj.usedLanguage}</p>
        </div>
      </div>
    );
  };

  const switchContent = (menuState) => {
    switch (menuState) {
      case 1:
        return (
          <>
            {ProjectData.java.map((projectObj, index) =>
              displayContent(projectObj, index)
            )}
          </>
        );
        break;
      case 2:
        return (
          <>
            {ProjectData.web.map((projectObj, index) =>
              displayContent(projectObj, index)
            )}
          </>
        );
        break;
      case 3:
        return (
          <>
            {ProjectData.andriod.map((projectObj, index) =>
              displayContent(projectObj, index)
            )}
          </>
        );
        break;
      default:
        return <p>java</p>;
    }
  };

  const toggleMenu = (i) => {
    setMenuState(i);
  };
  return (
    <div id="projects" className="container projects">
      <h2>.projects()</h2>

      <div>
        <div className="tabsMenu">
          <button
            className={menuState === 1 ? "active" : ""}
            onClick={() => toggleMenu(1)}
          >
            Java <span>Application</span>
          </button>
          <button
            className={menuState === 2 ? "active" : ""}
            onClick={() => toggleMenu(2)}
          >
            Web <span>Application</span>
          </button>
          <button
            className={menuState === 3 ? "active" : ""}
            onClick={() => toggleMenu(3)}
          >
            Android <span>Application</span>
          </button>
        </div>
        {window.innerWidth > 859 && (
          <div className="borderFiller">
            <div className="borderTop"></div>
          </div>
        )}
        <div className="viewContainer">
          <div className="proContent">{switchContent(menuState)}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
