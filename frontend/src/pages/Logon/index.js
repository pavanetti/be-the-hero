import React from "react";

import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

export function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="button">Entrar</button>
          <a href="/register">
            <FiLogIn size={18} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
}
