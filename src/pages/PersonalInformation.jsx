import React from "react";
import "./PersonalInformation.css";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="personal-info-container">
      <div className="info-section">
        <h2>Servicios Especializados</h2>
        <div className="services-grid">
          <div className="service-card financial-card">
            <h3>Asesoramiento Financiero</h3>
            <ul>
              <li>Gestión patrimonial para Empresas, Autónomos y Particulares</li>
              <li>Planificación económica a corto, medio y largo plazo</li>
              <li>Optimización de rendimiento de ahorros</li>
              <li>Estrategias tributarias personalizadas</li>
            </ul>
          </div>

          <div className="service-card mortgage-card">
            <h3>Servicios Hipotecarios</h3>
            <ul>
              <li>Gestión integral de hipotecas</li>
              <li>Asesoramiento multicliente (particulares, autónomos, empresas)</li>
              <li>Hipotecas ICO y subrogaciones</li>
              <li>Resolución de litigios inmobiliarios</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navigation-section">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Volver a la página anterior"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;