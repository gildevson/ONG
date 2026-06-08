import React, { useState } from "react";
import { FaWhatsapp, FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const WHATSAPP_NUMBER = "5541987226179";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    consentimento: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim())      newErrors.nome      = "Informe seu nome.";
    if (!formData.email.trim())     newErrors.email     = "Informe seu e-mail.";
    if (!formData.telefone.trim())  newErrors.telefone  = "Informe seu telefone.";
    if (!formData.mensagem.trim())  newErrors.mensagem  = "Escreva sua mensagem.";
    if (!formData.consentimento)    newErrors.consentimento = "Você precisa aceitar os termos.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const text = `Ola! Vim pelo site da ONG e gostaria de entrar em contato.

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}

*Mensagem:*
${formData.mensagem}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-page">

      {/* ── Hero ────────────────────────────────────── */}
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-hero-label">Fale conosco</span>
          <h1>Entre em <span>Contato</span></h1>
          <p>Preencha o formulário e sua mensagem será enviada diretamente para o nosso WhatsApp.</p>
        </div>
      </div>

      {/* ── Conteúdo ────────────────────────────────── */}
      <div className="contact-content">
        <div className="contact-card">

          {/* Cabeçalho do card */}
          <div className="contact-card-header">
            <FaWhatsapp className="whatsapp-icon-form" />
            <div>
              <h2>Enviar pelo WhatsApp</h2>
              <p>Preencha os campos abaixo e clique em enviar.</p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <div className={`field ${errors.nome ? "field-error" : ""}`}>
                <label>Nome *</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                />
                {errors.nome && <span className="error-msg">{errors.nome}</span>}
              </div>

              <div className={`field ${errors.telefone ? "field-error" : ""}`}>
                <label>Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="(41) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                />
                {errors.telefone && <span className="error-msg">{errors.telefone}</span>}
              </div>
            </div>

            <div className={`field ${errors.email ? "field-error" : ""}`}>
              <label>E-mail *</label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className={`field ${errors.mensagem ? "field-error" : ""}`}>
              <label>Mensagem *</label>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Escreva sua mensagem aqui..."
                value={formData.mensagem}
                onChange={handleChange}
              />
              {errors.mensagem && <span className="error-msg">{errors.mensagem}</span>}
            </div>

            <div className={`consent-row ${errors.consentimento ? "field-error" : ""}`}>
              <input
                type="checkbox"
                id="consent"
                name="consentimento"
                checked={formData.consentimento}
                onChange={handleChange}
              />
              <label htmlFor="consent">
                Autorizo o uso dos meus dados para contato pela ONG Influenciando Gerações.
              </label>
            </div>
            {errors.consentimento && <span className="error-msg">{errors.consentimento}</span>}

            <button type="submit" className="whatsapp-send-btn">
              <FaWhatsapp /> Enviar pelo WhatsApp
            </button>
          </form>

          {/* Redes sociais */}
          <div className="contact-social">
            <a href="https://www.youtube.com/@influenciandogeracoes" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube /> YouTube
            </a>
            <a href="https://www.instagram.com/influenciandogeracoes_/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="contact-map-side">
          <div className="map-info">
            <span className="map-badge">Nossa localização</span>
            <h3>Onde estamos</h3>
            <p>R. Argemiro Rodrigues de Paula, 332 — Jardim dos Eucaliptos, Piraquara – PR</p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.414478529305!2d-49.149155799999996!3d-25.4578319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf1db310a2781%3A0x85e95d67b7aa0a16!2sR.%20Argemiro%20Rodrigues%20de%20Paula%2C%20332%20-%20Jardim%20dos%20Eucaliptos%2C%20Piraquara%20-%20PR%2C%2083311-080!5e0!3m2!1spt-BR!2sbr!4v1743124188401!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <a
            className="map-open-btn"
            href="https://maps.google.com/?q=R.+Argemiro+Rodrigues+de+Paula,+332,+Jardim+dos+Eucaliptos,+Piraquara+PR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt /> Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
