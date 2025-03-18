import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import logo from "./logo.png"; // Substitua pelo caminho correto da sua imagem

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const targetElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
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
    <div className="about-container">
      {/* Logo e Quem Somos */}
      <img src={logo} alt="Instituto Influenciando Gerações" className="about-logo" />
      <h1 className="about-title">Quem Somos?</h1>
      <p className="about-text">
        O <strong>Instituto Influenciando Gerações</strong> é uma instituição sem fins lucrativos que há alguns anos
        atende centenas de crianças na região de Piraquara-PR. Nosso trabalho tem sido crucial para o desenvolvimento
        social e educacional de jovens e crianças da cidade.
      </p>
      <p className="about-text">
        Através do esporte e do hip-hop, criamos uma conexão genuína com a população atendida e, por meio dessa
        conexão, buscamos contribuir para o crescimento e desenvolvimento dessas crianças e jovens.
      </p>
      <p className="about-text">
        Nosso principal objetivo é garantir que nossos jovens cresçam e se formem como cidadãos honestos e honrados,
        prontos para fazer a diferença na sociedade. Seja no esporte, na música, na política, nos negócios ou onde
        quer que escolham estar, queremos que eles tenham oportunidades reais de sucesso.
      </p>

      {/* Seção História */}
      <div ref={sectionRef} className={`history-section ${isVisible ? "visible" : ""}`}>
        <h2 className="about-title">Nossa História</h2>
        <p className="about-text">
          Nosso fundador e atual presidente, <strong>Matheus Saimon</strong>, cresceu no bairro onde hoje o Instituto atua e foi fundado.
          Desde pequeno, viu de perto a violência, o crime e as drogas destruindo grande parte das coisas que amava ao seu redor.
        </p>
        <p className="about-text">
          Em 2018, seu irmão <strong>Rafael Wesley</strong> foi vítima da violência e do crime, sendo assassinado com 8 tiros na rua de sua casa.
          Esse momento foi decisivo para que Matheus decidisse transformar sua dor em ação.
        </p>
        <p className="about-text">
          Ele começou ajudando projetos sociais locais e, em 2023, fundou sua própria ONG, o <strong>Instituto Influenciando Gerações</strong>,
          que hoje atende centenas de crianças todo fim de semana em sua cidade.
        </p>
      </div>
    </div>
  );
};

export default About;
