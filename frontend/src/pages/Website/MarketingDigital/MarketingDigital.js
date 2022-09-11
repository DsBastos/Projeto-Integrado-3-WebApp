import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./MarketingDigitalStyles.css";

import InputChecke from "../../../components/Cliente/inputChecke";
import InputRadio from "../../../components/Cliente/inputRadio";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import logo from "../../../assets/png/logotipoincommun.png";
import NavBar from "../../../components/Cliente/navbar";
import ImageMailSubmit from "../../../assets/png/undraw_Mail.png";

export function MarketingDigital() {
  const [campPack, setCampPack] = useState([undefined,"", false]);
  const [campPostsSemana, setcampPostsSemana] = useState([undefined,"", false]);
  const [campStoriesSemana, setcampStoriesSemana] = useState([undefined,"", false]);
  const [campCapasMes, setcampCapasMes] = useState([undefined,"", false]);
  const [campHorasSemana, setcampHorasSemana] = useState([undefined,"", false]);
  const [campCopywritting, setcampCopywritting] = useState([19, "", false]);
  const [campDesignPublicacoes, setcampDesignPublicacoes] = useState([20, "", false]);
  const [campRelatorioMensal, setcampRelatorioMensal] = useState([21, "", false]);
  const [campPlanificacaoEditorial, setcampPlanificacaoEditorial] =
    useState([22, "", false]);

  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campContacto, setcampContacto] = useState("");

  const [seuPack, setseuPack] = useState([]);

  useEffect(() => {
    setseuPack([
      campPack,
      campPostsSemana,
      campStoriesSemana,
      campCapasMes,
      campHorasSemana,
      campCopywritting,
      campDesignPublicacoes,
      campRelatorioMensal,
      campPlanificacaoEditorial,
    ]);
  }, [
    campPack,
    campPostsSemana,
    campStoriesSemana,
    campCapasMes,
    campHorasSemana,
    campCopywritting,
    campDesignPublicacoes,
    campRelatorioMensal,
    campPlanificacaoEditorial,
  ]);

  console.log("renderizou");

  return (
    <>
      <header className="topnav container">
        <nav className="navbar d-flex align-items-center justify-content-between container-fluid">
          <a href="/" className="main-logo navbar-brand">
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
        <section className="main-cards">
          <ul
            className="nav nav-tabs-custom justify-content-center mt-3"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <div
                id="socialMedia-tab"
                className="nav-link nav-link-custom active"
                aria-current="page"
                data-bs-toggle="tab"
                data-bs-target="#socialMedia"
                role="tab"
                aria-controls="socialMedia"
                aria-selected="true"
              >
                <h3>Social Media</h3>
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div
                className="nav-link nav-link-custom"
                id="publicidadeADS-tab"
                data-bs-toggle="tab"
                data-bs-target="#publicidadeADS"
                role="tab"
                aria-controls="publicidadeADS"
                aria-selected="false"
              >
                <h3>Publicidade ADS</h3>
              </div>
            </li>
          </ul>

          <div
            className="d-flex flex-column my-auto w-100 tab-content"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active"
              id="socialMedia"
              role="tabpanel"
              aria-labelledby="socialMedia-tab"
            >
              <div className="d-flex flex-md-row align-items-center flex-column">
                <div className="card card-custom card-custom-border-radius mx-auto shadow-lg">
                  <p className="fw-bold fs-2">Pack Start</p>
                  <p className="text-dark fw-bolder">2 Redes Sociais</p>
                  <p className="text-dark fw-bolder">2 Posts/Semana</p>
                  <p className="text-dark fw-bolder">2 Stories/Semana</p>
                  <p className="text-dark fw-bolder">1 Cover | Capa</p>
                  <p className="text-dark fw-bolder">Design Gráfico</p>
                  <p className="text-dark fw-bolder">Copywriting</p>
                  <div className="  d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([1, "Social Media - Pack Start", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
                <div className="card card-custom card-custom-border-radius mx-auto shadow-lg">
                  <p className="fw-bold fs-2">Pack Boost</p>
                  <p className="text-dark fw-bolder">2 Redes Sociais</p>
                  <p className="text-dark fw-bolder">2 Posts/Semana</p>
                  <p className="text-dark fw-bolder">2 Stories/Semana</p>
                  <p className="text-dark fw-bolder">1 Cover | Capa</p>
                  <p className="text-dark fw-bolder">Design Gráfico</p>
                  <p className="text-dark fw-bolder">Copywriting</p>
                  <p className="text-dark fw-bolder">Planificação Editorial</p>
                  <div className="  d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([2, "Social Media - Pack Boost", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
                <div className="card card-custom card-custom-border-radius mx-auto shadow-lg">
                  <p className="fw-bold fs-2">Pack Bomb</p>
                  <p className="text-dark fw-bolder">2 Redes Sociais</p>
                  <p className="text-dark fw-bolder">2 Posts/Semana</p>
                  <p className="text-dark fw-bolder">2 Stories/Semana</p>
                  <p className="text-dark fw-bolder">1 Cover | Capa</p>
                  <p className="text-dark fw-bolder">Design Gráfico</p>
                  <p className="text-dark fw-bolder">Copywriting</p>
                  <p className="text-dark fw-bolder">Planificação Editorial</p>
                  <p className="text-dark fw-bolder">Consultoria Digital</p>
                  <p className="text-dark fw-bolder">Gestão de Campanhas</p>
                  <p className="text-dark fw-bolder">Relatório Estatístico</p>
                  <div className="d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([3, "Social Media - Pack Bomb", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" tab-pane fade"
              id="publicidadeADS"
              role="tabpanel"
              aria-labelledby="publicidadeADS-tab"
            >
              <div className="d-flex">
                <div className="card card-custom mx-auto shadow-lg">
                  <p className="fw-bold fs-2">Basic</p>
                  <h4 className="fw-bold text-white">
                    Facebook e Instagram Ads
                  </h4>
                  <p className="text-dark fw-bolder pt-3">Estratégia Digital</p>
                  <p className="text-dark fw-bolder">Criação de campanhas e anúncios</p>
                  <p className="text-dark fw-bolder">Segmentação do público</p>
                  <p className="text-dark fw-bolder">Otimização da campanha</p>
                  <p className="text-dark fw-bolder">Relatório Mensal</p>
                  <div className="d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([4, "Publicidade ADS - Pack Basic", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
                <div className="card card-custom mx-auto shadow-lg">
                  <div>
                    <p className="fw-bold fs-2">Premium</p>
                    <h4 className="fw-bold">
                    Google ADS
                  </h4>
                  <p className="text-dark fw-bolder pt-3">Estratégia Digital</p>
                  <p className="text-dark fw-bolder">Pesquisa de Keywords</p>
                  <p className="text-dark fw-bolder">Criação de campanhas e grupos de anúncios</p>
                  <p className="text-dark fw-bolder">Segmentação do público</p>
                  <p className="text-dark fw-bolder">Otimização de anúncios</p>
                  <p className="text-dark fw-bolder">Criação de conversões com o Google Tag Manager</p>
                  <p className="text-dark fw-bolder">Medição de conversões</p>
                  <p className="text-dark fw-bolder">Relatório Mensal</p>
                  </div>
                  <div className="d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([5, "Publicidade ADS - Pack Premium", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
                <div className="card card-custom mx-auto shadow-lg">
                  <p className="fw-bold fs-2">Profissional</p>
                  <h4 className="fw-bold text-white">
                    Facebook, Instagram e Google Ads
                  </h4>
                  <p className="text-dark fw-bolder pt-3">Estratégia Digital</p>
                  <p className="text-dark fw-bolder">Gestão de campanhas facebook / instagram Ads</p>
                  <p className="text-dark fw-bolder">Gestão de campanhas Google Ads</p>
                  <p className="text-dark fw-bolder">Criação de Conversões com o Google Tag Manager</p>
                  <p className="text-dark fw-bolder">Relatório Mensal</p>
                  <div className="d-grid mt-auto mb-2">
                    <button className="btn btn-custom btn-lg btn-quero"
                      onClick={() => setCampPack([6, "Publicidade ADS - Pack Profissional", true])}
                    >
                      Escolher
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-lg btn-warning my-5 btn-custom mx-auto">
              <a href="#orcamentoPack">Quero criar o meu pack</a>
            </button>
          </div>
        </section>
        <section
          className="orçamento d-flex flex-column flex-lg-row"
          id="orcamentoPack"
        >
          <div className="col-lg-8 p-5 ps-5">
            <div className="col-md-9 col-lg-11">
              <h1 className="fw-bold">Orçamento</h1>
              <div className="pt-3">

                <NavBar />

                <form>
                  <div className="card p-3 mt-5 card-custom-border-radius">
                    <div className="card-body">

                      <div className="d-flex flex-lg-row flex-column gx-5">
                        <div className="col-lg-3 pe-2">
                          <h5>Posts por semana</h5>
                          <p>
                            Quantos publicações por semana pretende ter em suas
                            redes sociais?
                          </p>

                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="2"
                              id="postSemana2"
                              name="PostsRadio"
                              value="2 post por semana"
                              onChange={(value) =>
                                setcampPostsSemana([7, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="3"
                              id="postSemana3"
                              name="PostsRadio"
                              value="3 post por semana"
                              onChange={(value) =>
                                setcampPostsSemana([8, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="5"
                              id="postSemana5"
                              name="PostsRadio"
                              value="5 post por semana"
                              onChange={(value) =>
                                setcampPostsSemana([9, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="7"
                              id="postSemana7"
                              name="PostsRadio"
                              value="7 post por semana"
                              onChange={(value) =>
                                setcampPostsSemana([10, value.target.value, true])
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-3 pe-2">
                          <h5>Stories por semana</h5>
                          <p>
                            Quantas stories por semana pretende ter em suas
                            redes sociais?
                          </p>

                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="2"
                              id="storiesSemana2"
                              name="StoriesRadio"
                              value="2 stories por semana"
                              onChange={(value) =>
                                setcampStoriesSemana([11, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="3"
                              id="storiesSemana3"
                              name="StoriesRadio"
                              value="3 stories por semana"
                              onChange={(value) =>
                                setcampStoriesSemana([12, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="5"
                              id="storiesSemana5"
                              name="StoriesRadio"
                              value="5 stories por semana"
                              onChange={(value) =>
                                setcampStoriesSemana([13, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="7"
                              id="storiesSemana7"
                              name="StoriesRadio"
                              value="7 stories por semana"
                              onChange={(value) =>
                                setcampStoriesSemana([14, value.target.value, true])
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-3 pe-2">
                          <h5>Capa por mês</h5>
                          <p>
                            Quantas capa por mês pretende ter em suas redes
                            sociais?
                          </p>

                          <div className="d-flex flex-wrap">
                            <InputRadio
                              number="1"
                              id="capaSemana1"
                              name="CapasRadio"
                              value="1 capa por mês"
                              onChange={(value) =>
                                setcampCapasMes([15, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="2"
                              id="capaSemana2"
                              name="CapasRadio"
                              value="2 capas por mês"
                              onChange={(value) =>
                                setcampCapasMes([16, value.target.value, true])
                              }
                            />
                          </div>
                        </div>

                        <div className="col-lg-3 ">
                          <h5>Consultoria Digital</h5>
                          <p>
                            Quantas horas deseja ter consultoria por semana?
                          </p>

                          <div className="d-flex flex-wrap mt-xl-4">
                            <InputRadio
                              number="1"
                              id="consultoria1"
                              name="ConsultoriaRadio"
                              value="1 hora de consultoria"
                              onChange={(value) =>
                                setcampHorasSemana([17, value.target.value, true])
                              }
                            />

                            <InputRadio
                              number="2"
                              id="consultoria2"
                              name="ConsultoriaRadio"
                              value="2 horas de consultoria"
                              onChange={(value) =>
                                setcampHorasSemana([18, value.target.value, true])
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-4 mt-4">
                            <InputChecke
                              nome="Copywriting"
                              id="idCopywriting"
                              value=""
                              onChange={(value) =>
                                isCheckedToggle(setcampCopywritting, value, 19)
                              }
                            />
                          </div>

                          <div className="col-lg-4 mt-4">
                            <InputChecke
                              nome="Design para publicações"
                              id="DesignPublicacoesSwitch"
                              value=""
                              onChange={(value) =>
                                isCheckedToggle(setcampDesignPublicacoes, value, 20)
                              }
                            />
                          </div>

                          <div className="col-lg-4 mt-4">
                            <InputChecke
                              nome="Relatório mensal"
                              id="RelatorioMensalSwitch"
                              value=""
                              onChange={(value) =>
                                isCheckedToggle(setcampRelatorioMensal, value, 21)
                              }
                            />
                          </div>

                          <div className="col-lg-4 mt-4">
                            <InputChecke
                              nome="Planificação Editorial"
                              id="flexSwitchCheckDefault"
                              value=""
                              onChange={(value) =>
                                isCheckedToggle(setcampPlanificacaoEditorial, value, 22)
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
            <div className="card-body p-5 ">
              <h2 className="seu-pack">Seu Pack</h2>

              <ol className="menu-lateral ">
                {seuPack.map((data, index) => {
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
                {seuPack.map((data, index) => {
                  if (seuPack.length !== 0) {
                    if (data[1] !== "") {
                      return (
                        <div className="mt-2">
                          <div className="d-flex align-items-center mt-2">
                            <li className="p-2 fw-bolder fs-2" key={index}>
                              <span className="ps-3">{data[1]}</span>
                              {console.log(seuPack)}
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

    seuPack.map((data) => {
      if (data[2]) {
        if (newPedido === "")
          return newPedido += data[0]

        newPedido += "," + data[0]
      }
    })

    console.log(newPedido)

    if (newPedido === "")
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
