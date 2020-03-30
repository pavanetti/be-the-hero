import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("ongs", data);
      response.data.id && history.push("/");
    } catch (err) {
      console.error("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={18} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={ev => setWhatsapp(ev.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={ev => setCity(ev.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={ev => setUf(ev.target.value)}
            />
          </div>
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
