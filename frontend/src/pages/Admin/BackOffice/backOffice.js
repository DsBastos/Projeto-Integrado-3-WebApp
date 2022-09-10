import React, { useEffect, useState } from "react";

import SideBar from "../../../components/BackOffice/sideBar";
import FillData from "../../../components/BackOffice/fillData";

import "../CustomStyles.css";
import "./BackofficeIndexStyles.css";

import axios from "axios";

import BarChart from "../../../components/BarChart.js";
import ModalPedidos from "../../../components/ModalPedidos";

export function BackOffice() {
  const [dataClientes, setdataClientes] = useState([]);

  return (
    <>
      <main className="main-Backoffice">

        <SideBar borderBottom="border-yellow-bottom" borderTop="border-yellow" />

        <div className="container mt-3 mb-5">
          <h2>Últimos Pedidos</h2>

          <div className="d-flex justify-content-around">
            <FillData numeroClientes="3"/>
          </div>

          <h2 className="mt-5">Gráficos</h2>
          
          <div className="card shadow-sm mt-3">
            <div className="card-body text-left">
              Packs Vendidos
              <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-orange"></i>
              <div className="mt-3">
                <BarChart />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="card shadow-sm mt-3">
                <div className="card-body text-left">
                  Pedidos
                  <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-orange"></i>
                  <div className="mt-3">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card shadow-sm mt-3 ms-3">
                <div className="card-body text-left">
                  Social Media - Vendidos
                  <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-orange"></i>
                  <div className="mt-3">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="card shadow-sm mt-3">
                <div className="card-body text-left">
                  Publicidade ADS - Vendidos
                  <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-orange"></i>
                  <div className="mt-3">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card shadow-sm mt-3 ms-3">
                <div className="card-body text-left">
                  Packs Personalizados - Vendidos
                  <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-orange"></i>
                  <div className="mt-3">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
