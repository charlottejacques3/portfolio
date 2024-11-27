import './App.css';
import React, { Component } from 'react';
import Modal from './Modal'

// import images
import canadaUnknown from './images/canada_unknown.png';
import pennywise from './images/pennywise.png';
import dungeonCrawl from './images/dungeon_crawl.png';

const portfolioItems = [
  {
    id: 1,
    title: "Canada Unknown",
    tagline: "Website showcasing Canada's underrated parks",
    tech: "HTML/CSS/JS, PHP, MySQL",
    description: "As part of my Grade 12 Capstone project, I designed and coded a website showcasing some of Canada's lesser known parks. I chose to do this project not only to improve my coding skills, but also to try to help take the strain off some heavily trafficked parks, and boost local economies in undervisited areas. The parks can be browsed either through a list or a map. The website information was stored in a mySQL database, and uploaded onto the website using PHP.",
    image: canadaUnknown,
    link: "https://sarsensystems.com/parks/index.php",
    github: "",
  },
  {
    id: 2,
    title: "Octocards",
    tagline: "Visual study app",
    description: "Octocards description",
    tech: "HTML/CSS/JS, Django, Bootstrap",
    image: "",
    link: "",
    github: "",
  },
  {
    id: 3,
    title: "VikeEats",
    tagline: "Club project",
    description: "Collaborated with peers, used Git, ",
    tech: "HTML/CSS/JS, Flask, Beautiful Soup",
    image: "",
    link: "",
    github: "",
  },
  {
    id: 4,
    title: "Pennywise",
    tagline: "Hackathon project",
    description: "Collaborated with peers, did not use Git:) ",
    tech: "HTML/CSS/JS, Django",
    image: pennywise,
    link: "",
    github: "",
  },
  {
    id: 5,
    title: "Dungeon Crawl",
    tagline: "Video game where",
    description: "Programming 12",
    tech: "Processing (Java)",
    image: dungeonCrawl,
    link: "",
    github: "",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: portfolioItems,
      modal: false,
      activeItem: {
        id: 0,
        title: "",
        tagline: "",
        description: "",
        tech: "",
        image: "",
        link: "",
        github: "",
      },
    };
  }

  projectDetails = (project) => {
    this.setState({ activeItem: project, modal: !this.state.modal });
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Charlotte Jacques</h1>
        </div>
        <p>My name is Charlotte Jacques, and I am a second year computer science student at the University of Victoria, and I am interested in full-stack web development. 
        In my free time, I enjoy rock climbing, hiking, crocheting, and reading.
        </p>
        <div className="row">
          { projects.map((project) => (
            <div className="col-md-4">
              <div className="card mb-2" key={project.id}>
                <img className="card-img-top" src={project.image}></img>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.tagline}</p>
                  <p><strong>Technologies used: </strong>{project.tech}</p>
                  <button onClick={() => this.projectDetails(project)} className="btn btn-primary">More Details</button>
                  { project.link !="" ? (
                    <a href={project.link} className="btn btn-primary">Project Link</a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        {this.state.modal ? (
          <Modal onClose={() => this.setState({ modal: !this.state.modal })}>
            <h2>{this.state.activeItem.title}</h2>
            <p><strong>Technologies used: </strong>{this.state.activeItem.tech}</p>
            <p>{this.state.activeItem.description}</p>
            { this.state.activeItem.link !="" ? (
                    <a href={this.state.activeItem.link} className="btn btn-primary">Project Link</a>
                  ) : null}
          </Modal>
        ) : null} 
      </div>
    );
  }
}
export default App;
