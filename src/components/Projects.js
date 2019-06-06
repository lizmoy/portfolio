import React from 'react'
import popaholic from '../images/popaholic.png'
import lexicon from '../images/lexicon.png'
import iterator from '../images/iterator.png'
import plantly from '../images/plantly.png'

export default function Projects() {
    return (
        <div className="projects-container" id="projects">
            <div id="wave-container">
                <div id="wave">
                </div>
            </div>
            <h3>Projects</h3>
            <div className="projects">
                <div className="row1">
                    <div className="project-div">
                        <div className="project">
                            <img src={popaholic} alt="" className="project-image" />
                            <a className="project-text-link" href="https://lizmoy.github.io/popaholic/" target="blank"><div className="overlay"><p className="overlay-text">Play the game</p></div></a>
                        </div>
                        <div className="project-text">
                            <p>A desktop browser game built with HTML, CSS, and vanilla JavaScript</p>
                            <a className="project-github" href="https://github.com/lizmoy/popaholic" target="blank">See the code on Github</a>
                        </div>
                    </div>
                    <div className="project-div">
                        <div className="project">
                            <img src={lexicon} alt="" className="project-image" />
                            <a className="project-text-link" href="https://lm-modern-lexicon.herokuapp.com/" target="blank"><div className="overlay"><p className="overlay-text">Visit the app</p></div></a>
                        </div>
                        <div className="project-text">
                            <p>A React app using data from the Merriam Webster API and NewsAPI</p>
                            <a className="project-github" href="https://github.com/lizmoy/dictionary-app" target="blank">See the code on Github</a>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="project-div">
                        <div className="project">
                            <img src={iterator} alt="" className="project-image" />
                            <a className="project-text-link" href="https://iterator.surge.sh/" target="blank"><div className="overlay"><p className="overlay-text">Visit the app</p></div></a>
                        </div>
                        <div className="project-text">
                            <p>A full stack app built in React and Express. Features: full CRUD and user authentication</p>
                            <a className="project-github" href="https://github.com/lizmoy/Iterator" target="blank">See the code on Github</a>
                        </div>
                    </div>
                    <div className="project-div">
                        <div className="project">
                            <img src={plantly} alt="" className="project-image" />
                            <a className="project-text-link" href="https://plantly.surge.sh/" target="blank"><div className="overlay"><p className="overlay-text">Visit the app</p></div></a>
                        </div>
                        <div className="project-text">
                            <p>A full stack app built in React and Rails. Features: full CRUD and user authentication</p>
                            <a className="project-github" href="https://github.com/lizmoy/plantly" target="blank">See the code on Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
