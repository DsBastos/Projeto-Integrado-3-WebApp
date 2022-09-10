import React, { useState, useContext } from "react";

export default function ContactoForm() {
  return (
    <form>
      <fieldset>
        <legend>Preencha seus dados para enviarmos o seu orçamento</legend>
        <div className="pt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Insira seu nome"
          />
        </div>
        <div className="pt-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="pt-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Contacto
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="9xx-xxx-xxx"
          />
        </div>
      </fieldset>
    </form>
  );
}
