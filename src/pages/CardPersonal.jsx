import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./CardPersonal.css";
import rosaImage from "../photos/rosa_maria.jpeg"; // Ensure you have the image in the correct path

const CardPersonal = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="card-personal-container"
            onClick={() => navigate("/personalInformation")}
        >
            <div className="card-content">
                <div className="card-text">
                    <div className="card-logo">
                        <img 
                            src="https://gadeoabogadosyasesores.es/wp-content/uploads/2023/01/cropped-Gadeo-Abogados-logo-4-1.png" 
                            alt="Gadeo Abogados Logo" 
                        />
                    </div>
                    <h2>Rosa María</h2>
                    <h2>Fuentes Espinosa</h2>
                    <h3>Abogada especialista en Finanzas e Hipotecas</h3>
                    
                    <div className="contact-info">
                        <div>
                            <FaPhone />
                            <a href="tel:+34684025695">684 025 695</a>
                        </div>
                        <div>
                            <FaEnvelope />
                            <a href="mailto:r.fuentes@gadeoabogadosyasesores.es">
                                r.fuentes@gadeoabogadosyasesores.es
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-image">
                    <img
                        src= {rosaImage}
                        alt="Rosa Mª Fuentes Espinosa"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardPersonal;