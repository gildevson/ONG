import React, { useState } from "react";
import "./donationForm.css"; // Estilos do formulário

const DonationForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Você doou R$${amount}! Obrigado!`);
    setAmount(""); // Reseta o campo após a doação
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <label>Valor da Doação (R$):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Doar</button>
    </form>
  );
};

export default DonationForm;
