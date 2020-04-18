import React from "react";
import PenMed from "../../../images/penn_med.png";
import AWV from "../../../images/aw-logo.png";
import GST from "../../../images/GST_Logo2.png";
import Ancora from "../../../images/ancora_logo.png";

function Wesites() {
    return (
        <div>

            <p>&nbsp;</p>
            <div class="subtitle">
                <h3>Websites</h3>
            </div>

            {/* =========== Block 1 ============= */}
            <div class="container portfolio-contain">
                <div class="row">

                    <div class="col-sm-12 col-md-4 portfolio-block">
                        <a title="Awakening Voices" target="_blank" rel="noopener noreferrer" href="https://zaretlab.med.upenn.edu/">
                            <img alt="Penn Med" src={PenMed} />
                            <h3 class="portfolio-block-title">Penn Medicine</h3>
                        </a>
                    </div>
        
                    <div class="col-sm-12 col-md-4 portfolio-block">
                        <a title="Awakening Voices" target="_blank" rel="noopener noreferrer" href="https://www.awakeningvoices.org/">
                            <img alt="AWV" src={AWV} />
                            <h3 class="portfolio-block-title">Awakening Voices</h3>
                        </a>
                    </div>

                </div>
            </div>
            {/* =========== End Block 1 ============= */}

            {/* =========== Block 1 ============= */}
            <div class="container portfolio-contain">
                <div class="row">

                    <div class="col-sm-12 col-md-4 portfolio-block">
                        <a title="GST Transport" target="_blank" rel="noopener noreferrer" href="https://gsttransport.com/">
                            <img alt="GST Transport" src={GST} />
                            <h3 class="portfolio-block-title">GST Transport</h3>
                        </a>
                    </div>
        
                    <div class="col-sm-12 col-md-4 portfolio-block">
                        <a title="Ancora Innovations" target="_blank" rel="noopener noreferrer" href="https://www.ancorainnovation.com/">
                            <img alt="Ancora Innovations" src={Ancora} />
                            <h3 class="portfolio-block-title">Ancora Innovations</h3>
                        </a>
                    </div>

                </div>
            </div>
            {/* =========== End Block 1 ============= */}

        </div>
        );
    }
    
    export default Wesites;