import React, { Component } from 'react';

import './App.css';
import './App.scss';
import axios from 'axios';

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://hsr-be-sprint1.herokuapp.com/api/projects'
      )
      .then(res => {
        this.setState({ projects: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='Smurfs'>
            <h1>Projects</h1>
            <ul>
              {this.state.projects.map(project => {
                return (
                  <div className='project-card'>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                  </div>
                );
              })}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
