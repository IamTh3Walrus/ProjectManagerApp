import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      // Map through the projectItems array
      projectItems = this.props.projects.map(project => {

      });
    }
    return (
      <div className="Projects">
        My Projects
      </div>
    );
  }
}

export default Projects;
