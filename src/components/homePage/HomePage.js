import React from 'react';
import biopic from '../../images/me.jpg';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import resume from '../../files/David_Pollan_2020_resume.pdf';

export default function HomePage() {
    return(
        <div class="container">

        <div id="content">
            <div id="title"><h2>About Me</h2></div>
            <div id="image"><img alt="My Self Portrait" src={biopic}/></div>
            <p>My name is David Pollan, and I've been a web developer for 5 years currently. I've worked with HTML, CSS, Wodpress, and Front-end web design. I currently work for a small internet marketing firm as a front-end developer. I am taking this class at Upenn in the hopes of reaching senior web develoer level.</p>
            <p>My goal in the Upenn Coding BootCamp is to devle deeper into JavaScript, learn JavaScript-based frameworks like react, and become more familiar with the comand line interface for GitBash.</p>
            <p>Before I became a web developer, I used to be an automotive technician due to my love of cars and car culture. When I'm not coding, I still love to work on my classic 1973 Buick Regal. I also like to write in my spare time and I hope to retire and be a published author for the rest of my days.</p>

            <button class="resume"><a title="Download Resume" href={resume}>See My Resume</a></button>
            <a title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dave-pollan-630b6163/"><img class="link-icon" alt="LinkedIn" src={linkedin}/></a>
            <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/dp95000"><img class="link-icon" alt="GitHub" src={github}/></a>
        </div>

    </div>

    )  
}