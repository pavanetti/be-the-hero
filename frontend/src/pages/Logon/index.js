import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      console.log(`sem id ${id}`);
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={ev => setId(ev.target.value)}
          />
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
