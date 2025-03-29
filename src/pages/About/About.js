import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import matheus from "../images/matheus.jpg"; // foto do fundador
import rafael from "../images/irmao.jpg";   // foto do irmão

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div className="about-container">
      {/* Seção Quem Somos */}
    
      <h1 className="about-title">Quem Somos?</h1>
      <p className="about-text">
        O <strong>Instituto Influenciando Gerações</strong> nasceu com a missão de transformar vidas. Somos uma organização
        sem fins lucrativos que atua há anos em Piraquara-PR, impactando a vida de centenas de crianças e jovens por meio
        da educação, cultura e esportes.
      </p>
      <p className="about-text">
        Acreditamos que, através do esporte e da cultura hip-hop, podemos criar laços verdadeiros com a comunidade, inspirando
        jovens a seguirem um caminho de aprendizado, superação e oportunidades. Nosso trabalho vai além de atividades recreativas:
        buscamos oferecer um ambiente seguro e acolhedor, onde cada criança pode descobrir seu potencial e sonhar com um futuro melhor.
      </p>

      {/* Seção Nossa História com animação */}
      <div
        ref={sectionRef}
        className={`history-section ${isVisible ? "visible" : ""}`}
      >
        {/* Bloco 1: Matheus - texto à esquerda, imagem à direita */}
        <div className="highlight-block">
          <div className="highlight-text">
            <h2 className="history-title">Nossa História</h2>
            <p>
              Nosso fundador e atual presidente, <strong>Matheus Saimon</strong>, cresceu no bairro onde hoje o Instituto atua e foi fundado.
              Desde pequeno, viu de perto a violência, o crime e as drogas destruindo grande parte das coisas que amava ao seu redor.
            </p>
          </div>
          <div className="highlight-image">
            <img src={matheus} alt="Matheus Saimon - Fundador" />
            <p className="image-caption">Matheus Saimon - Fundador do Instituto</p>
          </div>
        </div>

        {/* Bloco 2: Rafael - imagem à esquerda, texto à direita */}
        <div className="highlight-block reverse">
          <div className="highlight-image">
            <img src={rafael} alt="Rafael Wesley - In memoriam" />
            <p className="image-caption">Rafael Wesley - Em memória</p>
          </div>
          <div className="highlight-text">
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
    </div>
  );
};

export default About;
