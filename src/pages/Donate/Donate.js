import React, { useState } from "react";
import "./Donate.css";
import qrcodeImg from "../images/QrCode.jpeg"; // Importe a imagem local

const Donate = () => {
  const [pixKey] = useState("53808497000135"); // Substitua pela chave Pix real
  const [copied, setCopied] = useState(false);

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="donate-container">
      <h1>Faça parte desta história de amor ao próximo!</h1>
      <p className="subtitle">
        Para apoiar a <strong>Viver</strong> e as crianças e adolescentes
        beneficiados pela instituição, você pode:
      </p>

      {/* Seção PIX */}
      <div className="donation-option">
        <h2>Constribua com doações</h2>
        <p>
          O Pix é uma forma rápida de ajudar a <strong>Viver</strong> em suas
          diversas demandas financeiras. Clique no botão abaixo para copiar a
          chave Pix e fazer sua doação agora mesmo!
        </p>

        {/* QR Code */}
        <div className="qrcode-wrapper">
          <img
            src={qrcodeImg}
            alt="QR Code para doação"
            className="qrcode-image"
          />
        </div>

        <div className="button-group">
          <button className="copy-button" onClick={handleCopyPixKey}>
            {copied ? "Chave Copiada!" : "Copiar chave"}
          </button>
        </div>
      </div>

      {/* Seção Doação Online */}
      <div className="donation-option">
        <h2>Realizar uma doação online</h2>
        <p>
          A doação online é uma das formas mais práticas de ajudar. Basta clicar
          em um dos botões abaixo e doar o valor que quiser agora mesmo!
        </p>
        <div className="button-group">
          <button className="online-donate-button">Doe pelo PayPal</button>
          <button className="online-donate-button">Doe pelo PicPay</button>
        </div>
      </div>

      {/* Seção Doação de Roupas */}
      <div className="donation-option">
        <h2>Doação de Roupas</h2>
        <p>
          Você também pode contribuir doando roupas, calçados e acessórios em
          bom estado. Assim, podemos atender famílias em situação de
          vulnerabilidade.
        </p>
        <p>
          <strong>Como doar:</strong> Entre em contato pelo nosso telefone ou
          WhatsApp para combinar a entrega dos itens em nosso ponto de coleta.
        </p>
      </div>

      {/* Seção Doação de Alimentos */}
      <div className="donation-option">
        <h2>Doação de Alimentos</h2>
        <p>
          Alimentos não perecíveis, como arroz, feijão, macarrão, óleo e
          enlatados, são fundamentais para garantir refeições às famílias
          assistidas.
        </p>
        <p>
          <strong>Onde entregar:</strong> Você pode levar suas doações ao nosso
          centro de apoio ou agendar uma coleta, se necessário.
        </p>
      </div>

      {/* Seção Outros Itens */}
      <div className="donation-option">
        <h2>Outros Itens</h2>
        <p>
          Se você tem brinquedos, livros, material escolar ou itens de higiene
          que possam ser úteis, também aceitamos doações para ajudar ainda mais
          famílias.
        </p>
        <p>
          <strong>Dúvidas?</strong> Fale conosco para saber se o item que você
          deseja doar pode ser encaminhado às pessoas que atendemos.
        </p>
      </div>
    </div>
  );
};

export default Donate;
