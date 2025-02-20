import React from "react";
import QRCode from "qrcode.react";
import "./pixQRCode.css"; // Estilos do QR Code

const PixQRCode = ({ pixCode }) => {
  return (
    <div className="pix-container">
      <h2>Escaneie o QR Code para doar</h2>
      <QRCode value={pixCode} size={256} />
    </div>
  );
};

export default PixQRCode;
