import React, { useEffect, useState, useRef } from "react";
import "./HistorySection.css";
import historyImage from "../assets/historyImage.jpg"; // Verifique se o caminho da imagem está correto

const HistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetElement = sectionRef.current; // Armazena o elemento no início para evitar mudanças

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Quando 30% da seção estiver visível, a animação inicia
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`history-section ${isVisible ? "visible" : ""}`}>
      <div className="history-container">
        <div className="history-image">
          <img src={historyImage} alt="História do Instituto" />
        </div>
        <div className="history-text">
          <h2>H I S T Ó R I A</h2>
          <p>
            Nosso fundador e atual presidente, <strong>Matheus Saimon</strong>, cresceu no bairro onde hoje o Instituto atua e foi fundado.
            Desde pequeno, viu de perto a violência, o crime e as drogas destruindo grande parte das coisas que amava ao seu redor.
          </p>
          <p>
            Em 2018, seu irmão <strong>Rafael Wesley</strong> foi vítima da violência e do crime, sendo assassinado com 8 tiros na rua de sua casa.
            Esse momento foi decisivo para que Matheus decidisse transformar sua dor em ação.
          </p>
          <p>
            Ele começou ajudando projetos sociais locais e, em 2023, fundou sua própria ONG, o <strong>Instituto Influenciando Gerações</strong>,
            que hoje atende centenas de crianças todo fim de semana em sua cidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
