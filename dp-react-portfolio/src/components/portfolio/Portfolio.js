import React from "react";
import WebApps from './components/WebApps';
import Websites from './components/Websites';

function Portfolio() {
    return (
        <div class="container">
            <div id="content">
                <div id="title"><h2>Portfolio</h2></div>
                <WebApps />
                <Websites />
        </div>
        </div>
    );
  }
  
  export default Portfolio;