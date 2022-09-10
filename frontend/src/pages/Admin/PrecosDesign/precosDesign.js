import React, { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "../../../components/BackOffice/sideBar";
import InputDashboard from "../../../components/BackOffice/input";

import "../CustomStyles.css";

export function PrecosDesign() {
  const [dataPrecosdesign, setdataPrecosdesign] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/Servicos/listServicos";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPrecosdesign(data);
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
          <SideBar borderBottom="border-green-bottom" borderTop="border-green" />
  
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="container">
                    <div className="card-body text-left">
                      Preço - Design Gráfico
                      <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-green"></i>
                      <div className="mt-3">
                        <div className="row">
                          <div className="col">
                            {dataPrecosdesign.map((data, index) => {
                              if(data.tipo_servico_id === 2){ 
                                return (
                                  <InputDashboard index={index} id="estrategia" descricao={data.descricao} valor={data.valor}
                                    onChange={(value) => updateItemArray(index, value.target.value)}
                                  />
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className=" d-flex my-4">
                          <div className="m-auto">
                            <button
                              type="submit"
                              className="btn btn-custom btn-confirmgreen"
                              onClick={() => sendSave()}
                            > 
                              Confirmar
                            </button>
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
      </>
    );

    function sendSave() {
      dataPrecosdesign.map((data) => {
        if(data.tipo_servico_id === 2) {
          const url = "http://localhost:3000/Servicos/updateServicos/" + data.id
          const novoValor = {
            valor: data.valor
          }
  
          axios.post(url, novoValor)
            .then(res => {
              // if(res.data.success)
                // return alert(res.data.message)
  
              // alert(res.data.message + " " + data.descricao)
            })
            .catch(err => {
              alert("Erro: " + err)
            })
        }
      })
    }
    
    function updateItemArray(index, value) {
      let newArray = dataPrecosdesign
  
      newArray[index].valor = value
      setdataPrecosdesign(newArray)
    }
  }