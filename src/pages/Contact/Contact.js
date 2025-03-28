import React, { useState } from "react";
import { FaPaperPlane, FaYoutube, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    consentimento: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com\.br$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido do tipo gmail.com.br", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
  
    // Apenas simula o envio
    toast.success("Mensagem enviada com sucesso! (Vamos entrar em contato)", {
      position: "top-center",
      autoClose: 3000,
    });
  
    // Limpa os campos após o "envio"
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      consentimento: false,
    });
  };
  
  
  return (
    <div className="contact-wrapper">
      <ToastContainer />
      <div className="contact-container">
        <div className="contact-form">
          <h2 className="contact-title">📩 Entre em Contato</h2>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="contact-input"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            className="contact-input"
            value={formData.telefone}
            onChange={handleChange}
          />
          <textarea
            name="mensagem"
            placeholder="Digite sua mensagem..."
            className="contact-textarea"
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>

          <div className="contact-checkbox">
            <input
              type="checkbox"
              id="consent"
              name="consentimento"
              checked={formData.consentimento}
              onChange={handleChange}
            />
            <label htmlFor="consent">
              Estou ciente de que ao enviar meus dados estou autorizando o
              tratamento dos meus dados pessoais para finalidades exclusivas da ONG.
            </label>
          </div>

          <button className="contact-button" onClick={handleSubmit}>
            Enviar mensagem <FaPaperPlane />
          </button>

          <div className="contact-social">
            <a
              href="https://facebook.com/infleunciandogerações"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <FaYoutube /> YouTube
            </a>
            <a
              href="https://www.instagram.com/influenciandogeracoes_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.414478529305!2d-49.149155799999996!3d-25.4578319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf1db310a2781%3A0x85e95d67b7aa0a16!2sR.%20Argemiro%20Rodrigues%20de%20Paula%2C%20332%20-%20Jardim%20dos%20Eucaliptos%2C%20Piraquara%20-%20PR%2C%2083311-080!5e0!3m2!1spt-BR!2sbr!4v1743124188401!5m2!1spt-BR!2sbr"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
