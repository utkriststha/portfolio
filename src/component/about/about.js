import React from "react";
import "./about.css";

function About() {
    return (
        <div id="about" className="container about">
            <h2>/ about me</h2>
            <div className="block">
                <p>
                    I'm a <strong>Software Developer and AI Engineer</strong> based in Sydney.
                    I love building intelligent, scalable, and efficient solutions that combine cutting-edge technologies with practical, real-world applications.
                    Currently, I work at <a className="text_link" href="https://www.creativevirtual.com/" target="_blank" rel="noreferrer">Creative Virtual</a>, where I've gained hands-on experience in <strong>AI, Machine Learning, and Full-Stack Development</strong>, contributing to the creation of advanced <strong>AI chatbots, automation systems, and web applications</strong> for internal teams and multiple large corporations.
                    <br/>When I'm not coding, I enjoy exploring new AI innovations, learning emerging technologies, and turning ideas into real-world products. I'm always excited to take on challenges that push the boundaries of technology and creativity. 
                    </p>
            </div>
        </div>
    );
}

export default About;
