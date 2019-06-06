import React from 'react'
import email from '../images/email.svg'
import linkedin from '../images/linkedin-white.svg'
import github from '../images/github-white.svg'
import arrow from '../images/arrow-anchor.png'

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h3>Let's connect</h3>
            <p className="connect">Currently looking for full-time and freelance work. Don't hesitate to get in touch!</p>
            <div className="contact-options">
                <div className="contact-option">
                    <a className="contact-link" href="mailto:elizabethtmoy@gmail.com" target="blank"><img src={email} id="email" alt=""/></a>
                    <p className="contact-text">Email</p>
                </div>
                <div className="contact-option">
                    <a className="contact-link" href="https://www.linkedin.com/in/liz-moy" target="blank"><img src={linkedin} id="linkedin" alt=""/></a>
                    <p className="contact-text">LinkedIn</p>
                </div>
                <div className="contact-option">
                    <a className="contact-link" href="https://github.com/lizmoy" target="blank"><img src={github} id="github" alt=""/></a>
                    <p className="contact-text">Github</p>
                </div>
            </div>
            <a href="#landing" className="anchor-wrapper"><img src={arrow} className="anchor" alt=""/></a>
        </div>
    )
}
