import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./DesignGraficoStyles.css";

import InputChecke from "../../../components/Cliente/inputChecke";
import InputRadio from "../../../components/Cliente/inputRadio";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import logo from "../../../assets/png/logotipoincommun.png";

import DesignImg2 from "../../../assets/png/DesignImg2.png";
import NavBar from "../../../components/Cliente/navbar";

import ImageMailSubmit from "../../../assets/png/undraw_Mail.png";

export function DesignGrafico() {
  const [campAnalise, setcampAnalise] = useState([23, "", false]);
  const [campCriacao, setcampCriacao] = useState([24, "", false]);
  const [campPaleta, setcampPaleta] = useState([25, "", false]);
  const [campManual, setcampManual] = useState([26, "", false]);
  const [campSlogan, setcampSlogan] = useState([27, "", false]);
  const [campEstacionario, setcampEstacionario] = useState([28, "", false]);

  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campContacto, setcampContacto] = useState("");

  const [seuPackDesign, setseuPackDesign] = useState([]);

  useEffect(() => {
    setseuPackDesign([
      campAnalise,
      campCriacao,
      campPaleta,
      campManual,
      campSlogan,
      campEstacionario,
    ]);
  }, [
    campAnalise,
    campCriacao,
    campPaleta,
    campManual,
    campSlogan,
    campEstacionario,
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
          >
            Backoffice
          </Link>
        </nav>
      </header>
      <main>
        <section>
          <div className="d-sm-flex">
            <div className="col-md-8 col Hero-BackgroundImg d-flex align-items-center justify-content-center">
              <img src={DesignImg2} alt="" />
            </div>
            <div className="col-md-4 d-sm-flex align-items-start flex-column p-5 text-hero-color">
              <h1>Design</h1>
              <h3>gráfico</h3>
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
        <section className="orçamento d-flex flex-lg-row" id="orcamentoPack">
          <div className="col-lg-8 p-5 ps-5 ">
            <div className="col-md-8 col-lg-11">
              <h1 className="fw-bold">Orçamento</h1>
              <div className="pt-3">
                <NavBar />

                <div className="card p-3 mt-4 card-custom-border-radius">
                  <div className="card-body">
                    <h5 className="card-title">
                      Para a sua identidade visual, ajude-nos a entender quais
                      dos seguintes items mais faz sentido para si neste
                      momento:
                    </h5>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Análise da concorrência"
                            id="analiseConcorrencia"
                            onChange={(value) =>
                              isCheckedToggle(setcampAnalise, value, 23)
                            }
                          />
                        </div>

                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Criação de logótipo"
                            id="criacaoLogotipo"
                            onChange={(value) =>
                              isCheckedToggle(setcampCriacao, value, 24)
                            }
                          />
                        </div>

                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Paleta de cores"
                            id="paletaCores"
                            onChange={(value) =>
                              isCheckedToggle(setcampPaleta, value, 25)
                            }
                          />
                        </div>

                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Manual de normas gráficas"
                            id="manualNormasGraficas"
                            onChange={(value) =>
                              isCheckedToggle(setcampManual, value, 26)
                            }
                          />
                        </div>

                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Slogan para a marca"
                            id="sloganMarca"
                            onChange={(value) =>
                              isCheckedToggle(setcampSlogan, value, 27)
                            }
                          />
                        </div>

                        <div className="col-lg-4 mt-4">
                          <InputChecke
                            nome="Estacionário"
                            id="estacionario"
                            onChange={(value) =>
                              isCheckedToggle(setcampEstacionario, value, 28)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" d-none d-lg-block col-lg-4 bg-white card card-custom-sideBar shadow-lg border-0">
            <div className="card-body p-5 ">
              <h2 className="seu-pack">Seu Pack</h2>

              <ol className="menu-lateral ">
                {seuPackDesign.map((data, index) => {
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
                {seuPackDesign.map((data, index) => {
                  if (seuPackDesign.length !== 0) {
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
                  } else {
                    return <p>Não tem nenhum item no seu pack</p>;
                  }
                })}
              </ol>
            </div>
          </div>
          <div className="col bg-white card card-custom-sideBar shadow-lg border-0">
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
                type="button"
                className="btn-custom btn-warning text-white mt-4"
                onClick={() => OnSubmitForm()}
              >
                Enviar
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );

  function isCheckedToggle(setCamp, value, id) {
    if (value.target.checked)
      return setCamp([id, value.target.name, true]);

    setCamp([id, "", false])
  }

  function OnSubmitForm() {
    if (campNome === "")
      return alert("Introduza o Nome do cliente")
    if (campEmail === "")
      return alert("Introduza o Email do cliente")
    if (campContacto === "")
      return alert("Introduza o Contacto do cliente")

    let newPedido = ""

    seuPackDesign.map((data) => {
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

