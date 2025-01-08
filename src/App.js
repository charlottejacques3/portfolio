import './App.css';
import React, { Component } from 'react';
import Modal from './Modal'

// import images
import canadaUnknown from './images/canada_unknown.png';
import pennywise from './images/pennywise.png';
import dungeonCrawl from './images/dungeon_crawl.png';
import octocards from './images/octocards.png';


//project data
const portfolioItems = [
  {
    id: 1,
    title: "Canada Unknown",
    tagline: "Website showcasing Canada's underrated parks",
    tech: "HTML/CSS/JS, PHP, MySQL",
    description: `I developed my frontend and backend skills by designing and coding a website showcasing Canada's lesser known parks. The parks can be browsed either through a list or a map.
    The park information is stored in a mySQL database, and served to the website using PHP. I used HTML and CSS to design the site, and JavaScript to make the site responsive across various devices`,
    image: canadaUnknown,
    link: "https://sarsensystems.com/parks/index.php",
    github: "https://github.com/charlottejacques3/canada-unknown",
  },
  {
    id: 2,
    title: "Octocards",
    tagline: "Visual study app with a spaced repetition algorithm",
    description: `I designed a web application to help visual learners organize their study material into flashcards and tables in a way that makes sense to them. To promote maximum retention, they can then review the content with the program's spaced repetition algorithm. In addition, I have implemented features for users to group their study material into classes and topics.
    This application was coded mostly in Python's Django framework, which provided a way to store the user's study material in model classes connected to a SQLite database, and display it in a view. I coded the frontend in CSS, making use of the Bootstrap library.`,
    tech: "HTML/CSS/JS, Django, Bootstrap",
    image: octocards,
    link: "",
    github: "https://github.com/charlottejacques3/octocards",
  },
  {
    id: 3,
    title: "Pennywise",
    tagline: "Hackathon project - Finance management software for students",
    description: `I participated in the CODEHER+ Hackathon hosted by the University of Victoria Women in Engineering and Computer Science in October 2024. The prompt was to create a financial management platform for students.
    To achieve this, I collaborated with group members to create a web application allowing the user to set a budget and track expenses, and notifying them if they are over budget in a certain category. To make the website more engaging and interactive, we also implemented a Wordle-like minigame reminding the user not to overspend.
    My role in this project was primarily on the backend, where I implemented a database and models using Python's Django framework.`,
    tech: "HTML/CSS/JS, Django",
    image: pennywise,
    link: "",
    github: "https://github.com/charlottejacques3/codeher_hackathon_2024",
  },
  {
    id: 4,
    title: "VikeEats",
    tagline: "Extracurricular club project",
    description: `I am currently working as a member of the backend team on a project for VikeLabs, a software development club at the University of Victoria. The goal of our project is to create a website that provides easy access to information on all of UVic's food outlets, including menus, hours, and dietary restriction lists.
    Using the Beautiful Soup Python library, I have scraped various UVic websites to obtain menu information, and made this data available to the frontend team by creating an API with Flask.
    Throughout the making of this project, I have learned to collaborate effectively with teammmates in a software development context, and have become proficient in GitHub version control.`,
    tech: "HTML/CSS/JS, Flask, Beautiful Soup",
    image: "",
    link: "",
    github: "",
  },
  {
    id: 5,
    title: "Dungeon Crawl",
    tagline: "Video game where the player navigates a maze of tunnels and fights off monsters",
    description: `As a school project, I created a video game where the player navigates a maze of rooms and tunnels to reach the end of the level. Along the way, they encounter various types of monsters that they must fight off, with a final boss in the very last room.
    To implement this project, I utilized object-oriented programming concepts within Java's Processing library.`,
    tech: "Processing (Java)",
    image: dungeonCrawl,
    link: "",
    github: "https://github.com/charlottejacques3/dungeon-crawl",
  },
];

function SplitDescription(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

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
          <p id="links"><a href="https://github.com/charlottejacques3">Github</a> | <a href="https://www.linkedin.com/in/charlotte-jacques-9472a6337/">LinkedIn</a></p>
        </div>
        <p>My name is Charlotte Jacques, and I am a second year computer science student at the University of Victoria, and I am interested in software development, cybersecurity, and data science. 
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
                  { project.github !="" ? (
                    <a href={project.github} className="btn btn-primary">Github</a>
                  ) : null}
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
            <SplitDescription text={this.state.activeItem.description}/>
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
