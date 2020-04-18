import React from 'react';

export default function Header() {
    return(
    <header>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div id="name">David Pollan</div>
                </div>
                <div class="col-sm-12 col-md-8">
                    <nav>
                        <ul>
                            <li><a href="index.html">About</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )  
}