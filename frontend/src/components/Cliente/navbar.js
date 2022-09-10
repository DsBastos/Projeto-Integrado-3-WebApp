import React from 'react';
import { Link } from "react-router-dom";

import MarketingImg from "../../assets/png/MarketingImg.png";
import DesignImg2 from "../../assets/png/DesignImg2.png";
import ComunicacaoImg from "../../assets/png/ComunicacaoImg.png";
import WebsitesImg from "../../assets/png/WebsitesImg.png"

export default function NavBar() {
    return (
        <div className="d-flex flex-md-row flex-column mb-4 text-center">

            <div className="col-md-3 py-3 me-3">
                <Link to="/Orcamento/MarketingDigital">
                    <div className="card mb-3">
                        <img
                            className="rounded mx-auto d-block"
                            src={MarketingImg}
                            alt=""
                        />
                    </div>
                    Marketing
                    <p>Digital</p>
                </Link>
            </div>

            <div className="col-md-3 py-3 me-3">
                <Link to="/Orcamento/DesignGrafico">
                    <div className="card mb-3">
                        <img
                            className="rounded mx-auto d-block"
                            src={DesignImg2}
                            alt=""
                        />
                    </div>
                    Design
                    <p>Gráfico</p>
                </Link>
            </div>

            <div className="col-md-3 py-3 me-3">
                <Link to="/Orcamento/Comunicacao">
                    <div className="card mb-3 ">
                        <img
                            className="rounded mx-auto d-block"
                            src={ComunicacaoImg}
                            alt=""
                        />
                    </div>
                    Comunicação
                    <p>&#38; Consultoria</p>
                </Link>
            </div>

            <div className="col-md-3 py-3 me-3">
                <Link to="/Orcamento/WebsiteLojaOnline">
                    <div className="card mb-3">
                        <img
                            className="rounded mx-auto d-block"
                            src={WebsitesImg}
                            alt=""
                        />
                    </div>
                    Websites &#38; <p> Consultoria</p>
                </Link>
            </div>

        </div>
    );
}