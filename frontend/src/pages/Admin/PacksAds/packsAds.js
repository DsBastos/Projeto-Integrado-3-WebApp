import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

import SideBar from "../../../components/BackOffice/sideBar";

import "../CustomStyles.css";

export function PacksAds() {
  const [packBasic, setPackBasic] = useState("");
  const [packPremium, setPackPremium] = useState("");
  const [packProfissional, setPackProfissional] = useState("");

  useEffect(() => {
    const url = "http://localhost:3000/Servicos/listServicos";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setPackBasic(data[3].valor);
          setPackPremium(data[4].valor);
          setPackProfissional(data[5].valor);
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
      <main className="main-Backoffice">
        <SideBar borderBottom="border-blue-bottom" borderTop="border-blue" />

        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="container">
                  <div className="card-body text-left">
                    Packs Publicidade ADS
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
                            <p className="fw-bold fs-2">Basic</p>
                            <h4 className="fw-bold text-white">
                              Facebook e Instagram Ads
                            </h4>
                            <p className="text-dark fw-bolder pt-3">
                              Estrat??gia Digital
                            </p>
                            <p className="text-dark fw-bolder">
                              Cria????o de campanhas e an??ncios
                            </p>
                            <p className="text-dark fw-bolder">
                              Segmenta????o do p??blico
                            </p>
                            <p className="text-dark fw-bolder">
                              Otimiza????o da campanha
                            </p>
                            <p className="text-dark fw-bolder">
                              Relat??rio Mensal
                            </p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Pre??o:{" "}
                              <span className="fw-normal">{packBasic}???</span>
                            </p>
                          </div>
                          <div className="card card-custom mx-auto d-flex align-items-start flex-column shadow-lg">
                            <p className="fw-bold fs-2">Premium</p>
                            <h4 className="fw-bold">Google ADS</h4>
                            <p className="text-dark fw-bolder pt-3">
                              Estrat??gia Digital
                            </p>
                            <p className="text-dark fw-bolder">
                              Pesquisa de Keywords
                            </p>
                            <p className="text-dark fw-bolder">
                              Cria????o de campanhas e grupos de an??ncios
                            </p>
                            <p className="text-dark fw-bolder">
                              Segmenta????o do p??blico
                            </p>
                            <p className="text-dark fw-bolder">
                              Otimiza????o de an??ncios
                            </p>
                            <p className="text-dark fw-bolder">
                              Cria????o de convers??es com o Google Tag Manager
                            </p>
                            <p className="text-dark fw-bolder">
                              Medi????o de convers??es
                            </p>
                            <p className="text-dark fw-bolder">
                              Relat??rio Mensal
                            </p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Pre??o:{" "}
                              <span className="fw-normal">{packPremium}???</span>
                            </p>
                          </div>
                          <div className="card card-custom mx-auto d-flex align-items-start flex-column shadow-lg">
                            <p className="fw-bold fs-2">Profissional</p>
                            <h4 className="fw-bold text-white">
                              Facebook, Instagram e Google Ads
                            </h4>
                            <p className="text-dark fw-bolder pt-3">
                              Estrat??gia Digital
                            </p>
                            <p className="text-dark fw-bolder">
                              Gest??o de campanhas facebook / instagram Ads
                            </p>
                            <p className="text-dark fw-bolder">
                              Gest??o de campanhas Google Ads
                            </p>
                            <p className="text-dark fw-bolder">
                              Cria????o de Convers??es com o Google Tag Manager
                            </p>
                            <p className="text-dark fw-bolder">
                              Relat??rio Mensal
                            </p>
                            <p className="text-dark fw-bolder mt-auto fs-2">
                              Pre??o:{" "}
                              <span className="fw-normal">
                                {packProfissional}???
                              </span>
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
