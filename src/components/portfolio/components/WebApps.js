import React from "react";
import Philly_Auto from "../../../images/philly-emporium.jpg";
import Billboard from "../../../images/billboard.jpg";
import Note_Taker from "../../../images/note-taker.jpg";
import Burger from "../../../images/burger.jpg";
import Weather from "../../../images/weather.jpg";
import DayPlanner from "../../../images/dayplanner.jpg";

function WebApps() {
    return (
        <div>
        <div class="subtitle">
            <h3>Web Applications</h3>
        </div>
        
        {/* =========== Block 1 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="Project 2 - Philly Auto Emporium" target="_blank" rel="noopener noreferrer" href="https://philly-car-emporium.herokuapp.com">
                    <img alt="Project 2 - Philly Auto Emporium" src={Philly_Auto} /></a>
                    <h3 class="webapp-title">Project 2 - Philly Auto Emporium</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/dp95000/Project-2">View on GitHub</a>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://philly-car-emporium.herokuapp.com/">View on Heroku</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 1 ============= */}

        {/* =========== Block 2 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="Group Project 1 - Billboard Management System" target="_blank" rel="noopener noreferrer" href="https://dp95000.github.io/group-project-1">
                    <img alt="Group Project 1 - Billboard Management System" src={Billboard} /></a>
                    <h3 class="webapp-title">Project 1 - Billboard Management System</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/dp95000/group-project-1">View on GitHub</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 2 ============= */}

        {/* =========== Block 3 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="Note Taker App" target="_blank" rel="noopener noreferrer" href="https://quiet-mesa-62762.herokuapp.com">
                        <img alt="Note Taker App" src={Note_Taker} /></a>
                    <h3 class="webapp-title">Note Taker App</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://quiet-mesa-62762.herokuapp.com/">View on Heroku</a>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/dp95000/note-taker">View on GitHub</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 3 ============= */}

        {/* =========== Block 4 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="Burger Logger (Eat Da Burger!)" target="_blank" rel="noopener noreferrer" href="https://boiling-savannah-58390.herokuapp.com/">
                        <img alt="Burger Logger (Eat Da Burger!)" src={Burger} /></a>
                    <h3 class="webapp-title">Burger Logger (Eat Da Burger!)</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://boiling-savannah-58390.herokuapp.com/">View on Heroku</a>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://github.com/dp95000/burger-logger">View on GitHub</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 4 ============= */}

        {/* =========== Block 5 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="5 Day Weather Forecaster" target="_blank" rel="noopener noreferrer" href="https://dp95000.github.io/homework-weather-app/">
                        <img alt="5 Day Weather Forecaster" src={Weather} /></a>
                    <h3 class="webapp-title">5 Day Weather Forecaster</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://dp95000.github.io/homework-weather-app/">View on GitHub</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 5 ============= */}

        {/* =========== Block 6 ============= */}
        <div class="container portfolio-contain">
            <div class="row">
                <div class="col-sm-12 col-md-12 webapp">
                    <a title="Day Planner" target="_blank" rel="noopener noreferrer" href="https://dp95000.github.io/homework-dayplanner/">
                        <img alt="Day Planner" src={DayPlanner} /></a>
                    <h3 class="webapp-title">Day Planner</h3>
                    <a class="github-button" target="_blank" rel="noopener noreferrer" href="https://dp95000.github.io/homework-dayplanner/">View on GitHub</a>
                </div>
            </div>
        </div>
        {/* =========== End Block 6 ============= */}

        </div>
    );
  }
  
  export default WebApps;