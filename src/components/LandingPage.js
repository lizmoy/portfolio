import React from 'react'
import computer from '../images/comp.png'
import mobile from '../images/mobile1.png'

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="landing-main">
                <div className="name-container">
                    <div className="name">Liz</div>
                    <div className="name" id="last">Moy</div>
                    <p className="description">front-end web developer & designer</p>
                </div>
                <div className="main">
                    <nav>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </nav>
                    <img src={computer} alt="" className="computer"/>
                    <img src={mobile} alt="" className="mobile"/>
                </div>
            </div>
        </div>
    )
}
