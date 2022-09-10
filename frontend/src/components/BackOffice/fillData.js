import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ModalPedidos from '../ModalPedidos';

export default function FillData(props) {
    const [dataClientes, setdataClientes] = useState([]);

    useEffect(() => {
        if(props.numeroClientes !== "3")
            return LoadClientes()
        
        return Load3Clientes()
    }, [])

    function LoadClientes() {
        const url = "http://localhost:3000/Cliente/listCliente";
        axios.get(url)
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

    function Load3Clientes() {
        const url = "http://localhost:3000/Cliente/list3Cliente";
        axios.get(url)
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

    return dataClientes.map((data, index) => {
        return (
            <div className="card shadow-sm mt-3 me-3 p-2" key={index}>
                <div className="card-body text-left">

                    Pedidos #{data.id}
                    <i className="d-flex align-items-center link-dark text-decoration-none pb-2 border-red"></i>

                    <div className="mt-3">
                        <div className="d-flex">

                            <i className="bi bi-person-circle fs-3"></i>
                            <div className="ms-3">

                                <div className="d-flex mb-2">
                                    Nome: <div className="ms-3">{data.nome}</div>
                                </div>
                                <div className="d-flex mb-2">
                                    Email: <div className="ms-3">{data.email}</div>
                                </div>

                                <div className="d-flex mb-2 ">
                                    Contacto: <div className="ms-3">{data.contacto}</div>
                                </div>

                                <div className="d-flex mb-4 ">
                                    Valor: <div className="ms-3">{data.orcamentos[0].valor + " €"}</div>
                                </div>

                                <div className="d-flex">

                                    <button
                                        type="button"
                                        className="btn btn-custom btn-responderred"
                                        data-bs-toggle="modal"
                                        data-bs-target={"#" + data.nome}
                                    >
                                        Responder
                                    </button>

                                    <ModalPedidos nome={data.nome} id={data.nome} idPedido={data.id} pedidos={data.orcamentos}/>

                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    })
}