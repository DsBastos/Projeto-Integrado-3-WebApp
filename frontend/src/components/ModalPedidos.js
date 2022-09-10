import React, { useEffect, useState } from "react";

import InputRadio from "./Cliente/inputRadio";
import InputChecke from "./Cliente/inputChecke";
import axios from "axios";

export default function ModalPedidos(props) {
  const [packStart, setPackStart] = useState([1, false])
  const [packBoost, setPackBoost] = useState([2, false])
  const [packBomb, setPackBomb] = useState([3, false])

  const [packBasic, setPackBasic] = useState([4, false])
  const [packPremium, setPackPremium] = useState([5, false])
  const [packProfissional, setPackProfissional] = useState([6, false])

  const [postSemana2, setPostSemana2] = useState([7, false])
  const [postSemana3, setPostSemana3] = useState([8, false])
  const [postSemana5, setPostSemana5] = useState([9, false])
  const [postSemana7, setPostSemana7] = useState([10, false])

  const [storiesSemana2, setStoriesSemana2] = useState([11, false])
  const [storiesSemana3, setStoriesSemana3] = useState([12, false])
  const [storiesSemana5, setStoriesSemana5] = useState([13, false])
  const [storiesSemana7, setStoriesSemana7] = useState([14, false])

  const [capa1, setCapa1] = useState([15, false])
  const [capa2, setCapa2] = useState([16, false])

  const [consultoria1, setConsultoria1] = useState([17, false])
  const [consultoria2, setConsultoria2] = useState([18, false])

  const [copywriting, setCopywriting] = useState([19, false])
  const [designPublicacoes, setDesignPublicacoes] = useState([20, false])
  const [relatorioMensal, setRelatorioMensal] = useState([21, false])
  const [planificaçãoEditorial, setPlanificaçãoEditorial] = useState([22, false])

  const [analiseConcorrencia, setAnaliseConcorrencia] = useState([23, false])
  const [criacaoLogotipo, setCriacaoLogotipo] = useState([24, false])
  const [paletaCores, setPaleteCores] = useState([25, false])
  const [manualNormasGraficas, setManualNormasGraficas] = useState([26, false])
  const [sloganMarca, setSloganMarca] = useState([27, false])
  const [estacionario, setEstacionario] = useState([28, false])

  const [consultoriaMarketingComunicacao, setConsultoriaMarketingComunicacao] = useState([29, false])
  const [organizacaoEventos, setOrganizacaoEventos] = useState([30, false])
  const [assessoria, setAssessoria] = useState([31, false])

  const [landingPage, setLandingPage] = useState([32, false])
  const [website, setWebsite] = useState([33, false])
  const [integracao, setIntegracao] = useState([34, false])
  const [comDominio, setDominio] = useState([35, false])
  const [criacaoConteudosTextuais, setCriacaoConteudosTextuais] = useState([36, false])
  const [comAlojamento, setAlojamento] = useState([37, false])

  const [pedido, setPedido] = useState([])

  useEffect(() => {
    const url = "http://localhost:3000/Cliente/encontrarCLiente/" + props.idPedido

    axios.get(url)
      .then((res) => {
        const data = res.data.data
        const servicos = data.orcamentos[0].tems

        servicos.map((data) => {
          switch (data.servico_id) {
            case 1:
              return setPackStart([1, true])
            case 2:
              return setPackBoost([2, true])
            case 3:
              return setPackBomb([3, true])
            case 4:
              return setPackBasic([4, true])
            case 5:
              return setPackPremium([5, true])
            case 6:
              return setPackProfissional([6, true])
            case 7:
              return setPostSemana2([7, true])
            case 8:
              return setPostSemana3([8, true])
            case 9:
              return setPostSemana5([9, true])
            case 10:
              return setPostSemana7([10, true])
            case 11:
              return setStoriesSemana2([11, true])
            case 12:
              return setStoriesSemana3([12, true])
            case 13:
              return setStoriesSemana5([13, true])
            case 14:
              return setStoriesSemana7([14, true])
            case 15:
              return setCapa1([15, true])
            case 16:
              return setCapa2([16, true])
            case 17:
              return setConsultoria1([17, true])
            case 18:
              return setConsultoria2([18, true])
            case 19:
              return setCopywriting([19, true])
            case 20:
              return setDesignPublicacoes([20, true])
            case 21:
              return setRelatorioMensal([21, true])
            case 22:
              return setPlanificaçãoEditorial([22, true])
            case 23:
              return setAnaliseConcorrencia([23, true])
            case 24:
              return setCriacaoLogotipo([24, true])
            case 25:
              return setPaleteCores([25, true])
            case 26:
              return setManualNormasGraficas([26, true])
            case 27:
              return setSloganMarca([27, true])
            case 28:
              return setEstacionario([28, true])
            case 29:
              return setLandingPage([29, true])
            case 30:
              return setWebsite([30, true])
            case 31:
              return setIntegracao([31, true])
            case 32:
              return setDominio([32, true])
            case 33:
              return setCriacaoConteudosTextuais([33, true])
            case 34:
              return setAlojamento([34, true])
            case 35:
              return setConsultoriaMarketingComunicacao([35, true])
            case 36:
              return setOrganizacaoEventos([36, true])
            case 37:
              return setAssessoria([37, true])
          }
        })

      })
      .catch(err => {
        alert("Erro: " + err)
      })

  }, [])

  useEffect(() => {
    setPedido([
      packStart,
      packBomb,
      packBoost,
      packBasic,
      packPremium,
      packProfissional,
      postSemana2,
      postSemana3,
      postSemana5,
      postSemana7,
      capa1,
      capa2,
      consultoria1,
      consultoria2,
      copywriting,
      designPublicacoes,
      relatorioMensal,
      planificaçãoEditorial,
      analiseConcorrencia,
      criacaoLogotipo,
      paletaCores,
      manualNormasGraficas,
      sloganMarca,
      estacionario,
      consultoriaMarketingComunicacao,
      organizacaoEventos,
      assessoria,
      landingPage,
      website,
      integracao,
      comDominio,
      criacaoConteudosTextuais,
      comAlojamento
    ])

  }, [
    packStart,
    packBomb,
    packBoost,
    packBasic,
    packPremium,
    packProfissional,
    postSemana2,
    postSemana3,
    postSemana5,
    postSemana7,
    capa1,
    capa2,
    consultoria1,
    consultoria2,
    copywriting,
    designPublicacoes,
    relatorioMensal,
    planificaçãoEditorial,
    analiseConcorrencia,
    criacaoLogotipo,
    paletaCores,
    manualNormasGraficas,
    sloganMarca,
    estacionario,
    consultoriaMarketingComunicacao,
    organizacaoEventos,
    assessoria,
    landingPage,
    website,
    integracao,
    comDominio,
    criacaoConteudosTextuais,
    comAlojamento
  ])

  return (

    <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">#{props.idPedido}<span className="fw-normal"> - {props.nome}</span></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">

            <form>

              <div className="card p-3 my-4 card-custom-border-radius">
                <div className="card-body">

                  <div className="row">

                    {/* <div className="col-md-6">

                      <h5>Redes Sociais</h5>
                      <p>
                        Escolha as redes sociais que mais faz sentido para si e para
                        seus clientes
                      </p>
                      <select
                        className=" form-select form-select-custom"
                        aria-label="Default select"
                        value={campredeSocial}
                        onChange={(value) => setredeSocial(value.target.value)}
                      >
                        <option defaultValue>Escolha a rede social</option>
                        <option value="1">Facebook</option>
                        <option value="2">Instagram</option>
                        <option value="3">Tiktok</option>
                      </select>

                    </div> */}

                  </div>

                  <div className="d-flex flex-lg-row flex-column gx-5">
                    <div className="col mt-lg-2 pe-2">

                      <h4 className="fw-bolder">Marketing Digital</h4>

                    </div>
                  </div>

                  <div className="col-lg-6 mt-lg-2 pe-2 pb-3 pt-3">

                    <h5>Social Media</h5>

                    <div className="d-flex flex-wrap">

                      <InputRadio number="Pack Start" checked={packStart[1]} id="packStart" name="PackRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackBoost([2, false])
                            setPackBomb([3, false])
                            setPackStart([1, true])
                          }
                        }}
                      />

                      <InputRadio number="Pack Boost" checked={packBoost[1]} id="packBoost" name="PackRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackStart([1, false])
                            setPackBomb([3, false])
                            setPackBoost([2, true])
                          }
                        }}
                      />

                      <InputRadio number="Pack Bomb" checked={packBomb[1]} id="packBomb" name="PackRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackStart([1, false])
                            setPackBoost([2, false])
                            setPackBomb([3, true])
                          }
                        }}
                      />

                    </div>
                  </div>

                  <div className="col-lg-6 mt-lg-2 pe-2 pb-3 pt-3">

                    <h5>Publicidade ADS</h5>

                    <div className="d-flex flex-wrap">

                      <InputRadio number="Pack Basic" checked={packBasic[1]} id="packBasic" name="PackADSRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackPremium([5, false])
                            setPackProfissional([6, false])
                            setPackBasic([4, true])
                          }
                        }}
                      />

                      <InputRadio number="Pack Premium" checked={packPremium[1]} id="packPremium" name="PackADSRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackBasic([4, false])
                            setPackProfissional([6, false])
                            setPackPremium([5, true])
                          }
                        }}
                      />

                      <InputRadio number="Pack Profissional" checked={packProfissional[1]} id="packProfissional" name="PackADSRadio"
                        onChange={(value) => {
                          if (value.target.checked) {
                            setPackBasic([4, false])
                            setPackPremium([5, false])
                            setPackProfissional([6, true])
                          }
                        }}
                      />

                    </div>
                  </div>

                  <div className="d-flex flex-lg-row flex-column mt-2 gx-5">
                    <div className="col-lg-3 mt-lg-2 pe-2">

                      <h5>Posts por semana</h5>

                      <div className="d-flex flex-wrap">

                        <InputRadio number="2" checked={postSemana2[1]} id="postSemana2" name="PostsRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setPostSemana3([8, false])
                              setPostSemana5([9, false])
                              setPostSemana7([10, false])
                              setPostSemana2([7, true])
                            }
                          }}
                        />

                        <InputRadio number="3" checked={postSemana3[1]} id="postSemana3" name="PostsRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setPostSemana2([7, false])
                              setPostSemana5([9, false])
                              setPostSemana7([10, false])
                              setPostSemana3([8, true])
                            }
                          }}
                        />

                        <InputRadio number="5" checked={postSemana5[1]} id="postSemana5" name="PostsRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setPostSemana2([7, false])
                              setPostSemana3([8, false])
                              setPostSemana7([10, false])
                              setPostSemana5([9, true])
                            }
                          }}
                        />

                        <InputRadio number="7" checked={postSemana7[1]} id="postSemana7" name="PostsRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setPostSemana2([7, false])
                              setPostSemana3([8, false])
                              setPostSemana5([9, false])
                              setPostSemana7([10, true])
                            }
                          }}
                        />

                      </div>
                    </div>

                    <div className="col-lg-3 mt-4 mt-lg-2 pe-2">
                      <h5>Stories por semana</h5>

                      <div className="d-flex flex-wrap">

                        <InputRadio number="2" checked={storiesSemana2[1]} id="storiesSemana2" name="StoriesRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setStoriesSemana3([12, false])
                              setStoriesSemana5([13, false])
                              setStoriesSemana7([14, false])
                              setStoriesSemana2([11, true])
                            }
                          }}
                        />

                        <InputRadio number="3" checked={storiesSemana3[1]} id="storiesSemana3" name="StoriesRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setStoriesSemana2([11, false])
                              setStoriesSemana5([13, false])
                              setStoriesSemana7([14, false])
                              setStoriesSemana3([12, true])
                            }
                          }}
                        />

                        <InputRadio number="5" checked={storiesSemana5[1]} id="storiesSemana5" name="StoriesRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setStoriesSemana2([11, false])
                              setStoriesSemana3([12, false])
                              setStoriesSemana7([14, false])
                              setStoriesSemana5([13, true])
                            }
                          }}
                        />

                        <InputRadio number="7" checked={storiesSemana7[1]} id="storiesSemana7" name="StoriesRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setStoriesSemana2([11, false])
                              setStoriesSemana3([12, false])
                              setStoriesSemana5([13, false])
                              setStoriesSemana7([14, true])
                            }
                          }}
                        />

                      </div>
                    </div>
                    <div className="col-lg-3 mt-4 mt-lg-2 pe-2">
                      <h5>Capa por mês</h5>

                      <div className="d-flex flex-wrap">

                        <InputRadio number="1" checked={capa1[1]} id="capaSemana1" name="CapasRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setCapa2([16, false])
                              setCapa1([15, true])
                            }
                          }}
                        />

                        <InputRadio number="2" checked={capa2[1]} id="capaSemana2" name="CapasRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setCapa1([15, false])
                              setCapa2([16, true])
                            }
                          }}
                        />

                      </div>
                    </div>
                    <div className="col-lg-3 mt-4 mt-lg-2">
                      <h5>Consultoria Digital</h5>

                      <div className="d-flex flex-wrap">

                        <InputRadio number="1" checked={consultoria1[1]} id="consultoria1" name="ConsultoriaRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setConsultoria2([18, false])
                              setConsultoria1([17, true])
                            }
                          }}
                        />

                        <InputRadio number="2" checked={consultoria2[1]} id="consultoria2" name="ConsultoriaRadio"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setConsultoria1([17, false])
                              setConsultoria2([18, true])
                            }
                          }}
                        />

                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Copywriting" checked={copywriting[1]} id="idCopywriting" onChange={(value) => setCopywriting([19, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Design para publicações" checked={designPublicacoes[1]} id="DesignPublicacoesSwitch" onChange={(value) => setDesignPublicacoes([20, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Relatório mensal" checked={relatorioMensal[1]} id="RelatorioMensalSwitch" onChange={(value) => setRelatorioMensal([21, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Planificação Editorial" checked={planificaçãoEditorial[1]} id="flexSwitchCheckDefault" onChange={(value) => setPlanificaçãoEditorial([22, value.target.checked])} />

                      </div>

                    </div>

                  </div>

                  <div className="d-flex flex-lg-row flex-column mt-5 gx-5">
                    <div className="col mt-lg-2 pe-2">

                      <h4 className="fw-bolder">Design Gráfico</h4>

                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Análise da concorrência" checked={analiseConcorrencia[1]} id="analiseConcorrencia" onChange={(value) => setAnaliseConcorrencia([23, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Criação de logótipo" checked={criacaoLogotipo[1]} id="criacaoLogotipo" onChange={(value) => setCriacaoLogotipo([24, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Paleta de cores" checked={paletaCores[1]} id="paletaCores" onChange={(value) => setPaleteCores([25, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Manual de normas gráficas" checked={manualNormasGraficas[1]} id="manualNormasGraficas" onChange={(value) => setManualNormasGraficas([26, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Slogan para a marca" checked={sloganMarca[1]} id="sloganMarca" onChange={(value) => setSloganMarca([27, value.target.checked])} />

                      </div>

                      <div className="col-lg-4 mt-4">

                        <InputChecke nome="Estacionário" checked={estacionario[1]} id="estacionario" onChange={(value) => setEstacionario([28, value.target.checked])} />

                      </div>

                    </div>
                  </div>

                  <div className="d-flex flex-lg-row flex-column mt-5 gx-5">
                    <div className="col mt-lg-2 pe-2">

                      <h4 className="fw-bolder">Comunicacao e Consultoria</h4>

                    </div>
                  </div>

                  <div className="row d-flex flex-lg-row flex-column mt-2 gx-5">
                    <div className="col-lg-6 mt-lg-2 pe-2 pb-4">

                      <InputChecke nome="Consultoria de marketing e comunicacao" checked={consultoriaMarketingComunicacao[1]} id="consultoriaMarketingComunicacao" onChange={(value) => setConsultoriaMarketingComunicacao([35, value.target.checked])} />

                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Organização de eventos" checked={organizacaoEventos[1]} id="organizacaoEventos" onChange={(value) => setOrganizacaoEventos([36, value.target.checked])} />

                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Assessoria e criação de conteúdos" checked={assessoria[1]} id="assessoria" onChange={(value) => setAssessoria([37, value.target.checked])} />

                    </div>

                  </div>

                  <div className="d-flex flex-lg-row flex-column mt-5 gx-5">
                    <div className="col mt-lg-2 pe-2">

                      <h4 className="fw-bolder">Website e Consultoria</h4>

                    </div>
                  </div>

                  <div className="row d-flex flex-lg-row flex-column mt-2 gx-5">
                    <div className="col-lg-4 mt-lg-2 pe-2 pb-4">

                      <h5>Landing page ou website?</h5>

                      <div className="d-flex flex-wrap">

                        <InputRadio number="Landing page" checked={landingPage[1]} id="landingPage" name="landingPageWebsite"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setWebsite([30, false])
                              setLandingPage([29, true])
                            }
                          }}
                        />

                        <InputRadio number="Website" checked={website[1]} id="website" name="landingPageWebsite"
                          onChange={(value) => {
                            if (value.target.checked) {
                              setLandingPage([29, false])
                              setWebsite([30, true])
                            }
                          }}
                        />

                      </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Integração" checked={integracao[1]} id="integracao" onChange={(value) => setIntegracao([31, value.target.checked])} />

                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Com domínio" checked={comDominio[1]} id="dominio" onChange={(value) => setDominio([32, value.target.checked])} />

                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Com criação de conteúdos textuais" checked={criacaoConteudosTextuais[1]} id="conteudosTextuais" onChange={(value) => setCriacaoConteudosTextuais([33, value.target.checked])} />

                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-2 pe-2">

                      <InputChecke nome="Com alojamento" checked={comAlojamento[1]} id="alojamento" onChange={(value) => setAlojamento([34, value.target.checked])} />

                    </div>

                  </div>

                </div>
              </div>

            </form>

          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave()}>Guardar</button>
          </div>

        </div>
      </div>
    </div>
  );

  function onSave() {
    const url = "http://localhost:3000/Orcamento/editarOrcamento/" + props.idPedido
    console.log(url)

    let newPedido = ""

    pedido.map((data) => {
      if (data[1]) {
        if (newPedido === "")
          return newPedido += data[0]

        newPedido += "," + data[0]
      }
    })

    const update = {
      idServicos: newPedido
    }

    axios.post(url, update)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        alert("ERRO: " + err)
      })

  }
}