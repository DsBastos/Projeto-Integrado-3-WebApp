import React, { useState, useEffect } from "react";

import axios from "axios";

import SideBar from "../../../components/BackOffice/sideBar";

import "../CustomStyles.css";

export function PacksSocial() {
  const [packStart, setPackStart] = useState("");
  const [packBoost, setPackBoost] = useState("");
  const [packBomb, setPackBomb] = useState("");

  useEffect(() => {
    const url = "http://localhost:3000/Servicos/listServicos";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setPackStart(data[0].valor);
          setPackBoost(data[1].valor);
          setPackBomb(data[2].valor);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <>
      <header></header>
      <main className="main-Backoffice">
        <SideBar borderBottom="border-blue-bottom" borderTop="border-blue" />

        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="container">
                  <div className="card-body text-left">
                    Packs Social Media
                    <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-blue"></i>
                    <div
                      className="d-flex flex-column mt-5 tab-content"
                      id="myTabContent"
                    >
                      <div
                        className="justify-content-around tab-pane fade show active"
                        id="socialMedia"
                        role="tabpanel"
                        aria-labelledby="socialMedia-tab"
                      >
                        <div className="d-flex flex-md-row flex-column">
                          <div className="card card-custom mx-auto d-flex align-items-start flex-column shadow-lg">
                            <p className="fw-bold fs-2">Pack Start</p>
                            <p className="text-dark fw-bolder">
                              2 Redes Sociais
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Posts/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Stories/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              1 Cover | Capa
                            </p>
                            <p className="text-dark fw-bolder">
                              Design Gráfico
                            </p>
                            <p className="text-dark fw-bolder">Copywriting</p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Preço:{" "}
                              <span className="fw-normal">{packStart}€</span>
                            </p>
                          </div>

                          <div className="card card-custom mx-auto d-flex align-items-start flex-column shadow-lg">
                            <p className="fw-bold fs-2">Pack Boost</p>
                            <p className="text-dark fw-bolder">
                              2 Redes Sociais
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Posts/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Stories/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              1 Cover | Capa
                            </p>
                            <p className="text-dark fw-bolder">
                              Design Gráfico
                            </p>
                            <p className="text-dark fw-bolder">Copywriting</p>
                            <p className="text-dark fw-bolder">
                              Planificação Editorial
                            </p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Preço:{" "}
                              <span className="fw-normal">{packBoost}€</span>
                            </p>
                          </div>

                          <div className="card card-custom mx-auto d-flex align-items-start flex-column shadow-lg">
                            <p className="fw-bold fs-2">Pack Bomb</p>
                            <p className="text-dark fw-bolder">
                              2 Redes Sociais
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Posts/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              2 Stories/Semana
                            </p>
                            <p className="text-dark fw-bolder">
                              1 Cover | Capa
                            </p>
                            <p className="text-dark fw-bolder">
                              Design Gráfico
                            </p>
                            <p className="text-dark fw-bolder">Copywriting</p>
                            <p className="text-dark fw-bolder">
                              Planificação Editorial
                            </p>
                            <p className="text-dark fw-bolder">
                              Consultoria Digital
                            </p>
                            <p className="text-dark fw-bolder">
                              Gestão de Campanhas
                            </p>
                            <p className="text-dark fw-bolder">
                              Relatório Estatístico
                            </p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Preço:{" "}
                              <span className="fw-normal">{packBomb}€</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
