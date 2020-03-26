import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/indidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </div>
  );
}
