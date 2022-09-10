import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InputRadio from "../../../components/Cliente/inputRadio";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ComunicacaoStyles.css";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import logo from "../../../assets/png/logotipoincommun.png";

import NavBar from "../../../components/Cliente/navbar";
import ComunicacaoImg from "../../../assets/png/ComunicacaoImg.png";

import ImageMailSubmit from "../../../assets/png/undraw_Mail.png";

export function Comunicacao() {
  const [campConsultoriaComunicacao, setcampConsultoriaComunicacao] =
    useState([35, "", false]);
  const [campOrganizacaoComunicacao, setcampOrganizacaoComunicacao] =
    useState([36, "", false]);
  const [campAcessoriaComunicacao, setcampAcessoriaComunicacao] = useState([37, "", false]);

  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campContacto, setcampContacto] = useState("");

  const [seuPackComunicacao, setseuPackComunicacao] = useState([]);

  useEffect(() => {
    setseuPackComunicacao([
      campConsultoriaComunicacao,
      campOrganizacaoComunicacao,
      campAcessoriaComunicacao,
    ]);
  }, [
    campConsultoriaComunicacao,
    campOrganizacaoComunicacao,
    campAcessoriaComunicacao,
  ]);

  return (
    <>
      <header className="topnav container">
        <nav className="navbar d-flex align-items-center justify-content-between container-fluid">
          <a to="#" className="main-logo navbar-brand">
            <img src={logo} alt="Logotipo Incommun" />
          </a>
          <Link
            to="/Backoffice"
            className="btn btn-custom btn-warning btn-lg text-white"
            type="submit"
          >
            Backoffice
          </Link>
        </nav>
      </header>
      <main>
        <section>
          <div className="d-sm-flex">
            <div className="col-md-8 Hero-BackgroundImg d-flex align-items-center justify-content-center">
              <img src={ComunicacaoImg} alt="" />
            </div>
            <div className="col-md-4 d-sm-flex align-items-start flex-column p-5 text-hero-color">
              <h2>Comunicação</h2>
              <h3>&#38; Consultoria</h3>
              <div className="ms-auto mt-auto me-5 mb-5">
                <a
                  className="me-xl-4 me-md-2 mt-5 mt-md-0 mb-md-5 btn btn-lg btn-custom btn-warning text-white"
                  type="button"
                  to="#Orcamento"
                >
                  Criar o meu pack
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="orçamento d-flex" id="Orcamento">
          <div className="col-lg-8 p-5 ps-5">
            <div className="col-md-9 col-lg-11">
              <h1 className="fw-bold">Orçamento</h1>
              <div className="pt-3">
                <NavBar />

                <form>
                  <div className="card p-3 mt-5 card-custom-border-radius">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Consultoria de marketing e comunicação</h5>
                          <p>
                            Deseja ter acompanhamento no seu marketing e na
                            comunicacao?
                          </p>
                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="Sim"
                              id="consultoriaMarketingComunicacaoSim"
                              name="consultoriaMarketingComunicacaoRadio"
                              value="Consultoria de marketing e comunicação"
                              onChange={(value) => {
                                setcampConsultoriaComunicacao([35, value.target.value, true])
                              }
                              }
                            />

                            <InputRadio
                              number="Não"
                              id="consultoriaMarketingComunicacaoNao"
                              name="consultoriaMarketingComunicacaoRadio"
                              onChange={() =>
                                setcampConsultoriaComunicacao([35, "", false])
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <h5>Organização de eventos</h5>
                          <p>Gostaria de ter ajuda para organizar eventos?</p>
                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="Sim"
                              id="organizacaoEventosSim"
                              name="organizacaoEventosRadio"
                              value="Organização de eventos"
                              onChange={(value) =>
                                setcampOrganizacaoComunicacao([36, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="Não"
                              id="organizacaoEventosNao"
                              name="organizacaoEventosRadio"
                              onChange={() =>
                                setcampOrganizacaoComunicacao([36, "", false])
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6 pt-5">
                          <h5>Assessoria e criação de conteúdos</h5>
                          <p>Deseja ter acompanhamento na criação de conteúdos?</p>
                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="Sim"
                              id="assessoriaSim"
                              name="assessoriaRadio"
                              value="Assessoria e criação de conteúdos"
                              onChange={(value) =>
                                setcampAcessoriaComunicacao([37, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="Não"
                              id="assessoriaNao"
                              name="assessoriaRadio"
                              onChange={(value) =>
                                setcampAcessoriaComunicacao([37, "", false])
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-4 bg-white card card-custom-sideBar shadow-lg border-0">
            <div className="card-body py-5 px-5 ">
              <h2 className="seu-pack">Seu Pack</h2>

              <ol className="menu-lateral ">
                {seuPackComunicacao.map((data, index) => {
                  if (data[1] !== "") {
                    return (
                      <div className="mt-2">
                        <div className="d-flex align-items-center mt-2">
                          <li className="p-2 fw-bolder fs-5" key={index}>
                            <span className="ps-2">{data[1]}</span>
                          </li>
                        </div>
                      </div>
                    );
                  }
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="orçamento d-flex flex-column flex-md-row">
          <div className="col-md-8 ps-5 py-5">
            <h1 className="fw-bold">Confirmação do seu pack</h1>

            <div className="mt-5">
              <ol className="menu-confirmacao">
                {seuPackComunicacao.map((data, index) => {
                  if (seuPackComunicacao.length !== 0) {
                    if (data[1] !== "") {
                      return (
                        <div className="mt-2">
                          <div className="d-flex align-items-center mt-2">
                            <li className="p-2 fw-bolder fs-2" key={index}>
                              <span className="ps-3">{data[1]}</span>
                            </li>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </ol>
            </div>
          </div>
          <div className="col bg-white card card-custom-sideBar border-0">
            <div className="col-8 mx-auto card-body py-5 px-5 ">
              <form>
                <fieldset>
                  <legend>
                    Preencha seus dados para enviarmos o seu orçamento
                  </legend>
                  <div className="pt-5">
                    <label
                      htmlFor="idNome"
                      className="form-label"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idNome"
                      placeholder="Insira seu nome"
                      onChange={(value) => setcampNome(value.target.value)}
                    />
                  </div>
                  <div className="pt-4">
                    <label
                      htmlFor="idEmail"
                      className="form-label"
                    >
                      E-mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idEmail"
                      pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                      placeholder="name@example.com"
                      onChange={(value) => setcampEmail(value.target.value)}
                    />
                  </div>
                  <div className="pt-4">
                    <label
                      htmlFor="idContacto"
                      className="form-label"
                    >
                      Contacto
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="idContacto"
                      pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                      placeholder="9xx-xxx-xxx"
                      onChange={(value) => setcampContacto(value.target.value)}
                    />
                  </div>
                </fieldset>
              </form>
              <button
                type="submit"
                className="btn btn-custom btn-warning text-white mt-5"
                onClick={() => OnSubmitForm()}
              >
                <div className="fs-5">Enviar</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  function OnSubmitForm() {
    if (campNome === "")
      return alert("Introduza o Nome do cliente")
    if (campEmail === "")
      return alert("Introduza o Email do cliente")
    if (campContacto === "")
      return alert("Introduza o Contacto do cliente")

    let newPedido = ""

    seuPackComunicacao.map((data) => {
      if (data[2]) {
        if (newPedido === "")
          return newPedido += data[0]

        newPedido += "," + data[0]
      }
    })

    console.log(newPedido)

    if(newPedido === "")
      return alert("Necessita de adicionar elementos ao seu orçamento")


    const createClientUrl = "http://localhost:3000/Cliente/criarCliente"

    const newClient = {
      nome: campNome,
      email: campEmail,
      contacto: campContacto,
    }

    let idClienteCriado = ""

    axios.post(createClientUrl, newClient)
      .then(res => {
        idClienteCriado = res.data.data.id
        console.log(idClienteCriado)

        const createOrcamentoUrl = "http://localhost:3000/Orcamento/criarOrcamento"
        const create = {
          idCliente: idClienteCriado,
          idServicos: newPedido
        }
        console.log(create)

        axios.post(createOrcamentoUrl, create)
          .then(res => {
            if (res.data.success) {
              Swal.fire({
                text: "O pedido, numero " + res.data.data.id + ", foi registado com sucesso, aguarde por resposta previa",
                imageUrl: ImageMailSubmit,
                imageWidth: "10rem",
              });
            } else {
              alert(res.data.message)
            }
          })
          .catch(err => {
            alert("ERRO: " + err)
          })

      })
      .catch(err => {
        alert("ERRO: " + err)
      })
  }

}
