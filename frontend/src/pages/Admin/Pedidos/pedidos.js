import React, { useEffect, useState } from "react";

import "../CustomStyles.css";

import SideBar from "../../../components/BackOffice/sideBar";
import FillData from "../../../components/BackOffice/fillData";

import BarChart from "../../../components/BarChart.js";
import axios from "axios";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export function Pedidos() {
  const [dataClientes, setdataClientes] = useState([]);

  useEffect(() => {
    LoadClientes();
  }, []);

  function LoadClientes() {
    const url = "http://localhost:3000/Cliente/listCliente";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          setdataClientes(res.data.data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <main className="main-Backoffice">
        
        <SideBar borderBottom="border-red-bottom" borderTop="border-red" />

        <div className="container mt-3 mb-5">
          <h2>Todos os pedidos</h2>
          <div className="d-md-flex">
            <div className="col-xl-6">

            <FillData />

            </div>

            <div className="col-xl-6">
              <div className="card shadow-sm ms-3 mt-3">
                <div className="card-body text-left">
                  Publicidade ADS - Vendidos
                  <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-red"></i>
                  <div className="mt-3">

                    <BarChart />

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

  function OnDelete(id_cliente) {
    Swal.fire({
      title: "Tem a certeza que deseja apagar os dados deste cliente juntamente com o seu orçamento?",
      text: "Não será possivel recuperar os dados deste cliente nem do seu respectivo orçamento!",
      showCancelButton: true,
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Não, manter",
    }).then((result) => {
      if (result.value) {
        SendDelete(id_cliente);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelado",
          "Os dados deste cliente e do seu orçamento estão seguros 🙂",
          "error"
        );
      }
    });
  }

  function SendDelete(id_cliente) {
    // url do backend
    const baseUrl = "https://localhost:3000/Backoffice/Pedidos/delete";
    // network
    axios
      .post(baseUrl, {
        id_cliente: id_cliente,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire(
            "Eliminado!",
            "O cliente escolhido foi eliminado com os seus respectivos dados.",
            "success"
          );
          LoadClientes();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}
