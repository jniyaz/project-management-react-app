import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p className="">{project.description}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted By: {project.authorFirstName} {project.authorLastName}
            </div>
            <div>Date: 03/06/2020, 02 am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section center project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="preloader-wrapper big active col">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
