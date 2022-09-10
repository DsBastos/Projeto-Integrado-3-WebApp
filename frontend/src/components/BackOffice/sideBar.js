import React from 'react';

import { Link } from "react-router-dom";

export default function SideBar(props) {
    return (
        <>
            <div className="vh-100 d-flex flex-column flex-shrink-0 p-4 bg-light" style={{ width: "230px" }}>
                <Link to="/Backoffice" className={"d-flex align-items-center link-dark text-decoration-none pb-2 " + props.borderTop}>
                    <img src="https://github.com/mdo.png" alt="" className="rounded-circle me-2" width="32" height="32" />
                    <span className="fs-6">Daniel Bastations</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-auto pt-3">
                    <li className="nav-item">
                        <Link to="/Backoffice" className="nav-link link-dark" aria-current="page">
                            <i className="bi bi-house-door pe-2"></i>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/Backoffice/Pedidos" className="nav-link link-dark pt-4">
                            <i className="bi bi-envelope pe-2"></i>
                            Pedidos
                        </Link>
                    </li>
                    <li>
                        <a
                            className="btn dropdown-toggle pt-4"
                            data-bs-toggle="collapse"
                            data-bs-target="#precos-collapse"
                            aria-expanded="true"
                        >
                            <i className="bi bi-currency-euro pe-2"></i>
                            Preços
                        </a>
                        <div className="collapse" id="precos-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/Precosmarketing">
                                        <i className="bi bi-dot pe-2"></i>Marketing Digital
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/Precosdesign">
                                        <i className="bi bi-dot pe-2"></i>Design Gráfico
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/Precoscomunicacao">
                                        <i className="bi bi-dot pe-2"></i>Comunicação e Consultoria
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/Precoswebsite">
                                        <i className="bi bi-dot pe-2"></i>Website &amp; Consultoria
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="btn dropdown-toggle pt-4" data-bs-toggle="collapse" data-bs-target="#packs-collapse"
                            aria-expanded="true">
                            <i className="bi bi-box-seam pe-2"></i>
                            Packs
                        </a>
                        <div className="collapse" id="packs-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/PacksSocial"><i className="bi bi-dot pe-2"></i>Social Media</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Backoffice/Packads"><i className="bi bi-dot pe-2"></i>Publicidade ADS</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <a className={"d-flex align-items-center link-dark text-decoration-none pb-2 " + props.borderBottom}></a>
                <div className="logout">
                    <Link to="" className="nav-link link-dark"><i className="bi bi-box-arrow-left pe-2"></i> Logout</Link>
                </div>
            </div>
        </>
    );
}