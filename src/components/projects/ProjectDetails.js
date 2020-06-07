import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda et, omnis officiis voluptatem necessitatibus!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By: Niyaz</div>
          <div>Date: 03/06/2020, 02 am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
