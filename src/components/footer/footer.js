import React from 'react';

export default function Footer() {
    return(
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>{ new Date().getFullYear() } David Pollan</p>
                </div>
            </div>
        </div>
    </footer>
    )  
}