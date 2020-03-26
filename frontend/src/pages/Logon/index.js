import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="button">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={18} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
}
