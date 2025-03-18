import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

// Importando a imagem única
import image1 from "../../assets/image1.jpg";

// Ícone para os cards
import { FaHandsHelping, FaBookOpen, FaUsers, FaHeart } from "react-icons/fa";

// Dados dinâmicos para os cards
const cards = [
  {
    id: 1,
    icon: <FaHandsHelping size={50} />,
    title: "NOSSA MISSÃO",
    text: "Promover a inclusão e o desenvolvimento de crianças e jovens por meio da educação, cultura e esportes.",
  },
  {
    id: 2,
    icon: <FaBookOpen size={50} />,
    title: "EDUCAÇÃO PARA O FUTURO",
    text: "Apoiamos crianças com reforço escolar, acesso a livros e oportunidades de aprendizado contínuo.",
  },
  {
    id: 3,
    icon: <FaUsers size={50} />,
    title: "TRABALHO COMUNITÁRIO",
    text: "Nossos projetos impactam a comunidade local, fortalecendo vínculos sociais e oferecendo suporte essencial.",
  },
  {
    id: 4,
    icon: <FaHeart size={50} />,
    title: "JUNTE-SE A NÓS",
    text: "Seja um voluntário ou faça uma doação! Pequenas ações transformam vidas e constroem um futuro melhor.",
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="instituto-section">
        
        {/* 🔹 Seção de Texto */}
        <div className="instituto-text">
          <h2 className="instituto-title">
            <span>INSTITUTO</span> <strong>INFLUENCIANDO GERAÇÕES</strong>
          </h2>
          <p>
            O <strong>Instituto Influenciando Gerações</strong> é uma organização sem fins lucrativos dedicada a defender e proteger os direitos das crianças e dos jovens de Piraquara, além de buscar proporcionar oportunidade e inclusão por meio da educação, da cultura e do esporte e de iniciativas sociais.
          </p>
          <p>
            Acreditamos que <strong>pequenas ações podem gerar grandes mudanças e salvar vidas!</strong> Venha fazer parte dessa transformação.
          </p>
          <a href="Projects" className="instituto-button">
            Saiba Mais <FaArrowRight />
          </a>
        </div>

        {/* 🔹 Imagem posicionada corretamente */}
        <div className="imagem-container">
          <img src={image1} alt="Instituto Influenciando Gerações" className="instituto-image" />
        </div>

        {/* 🔹 Seção de Cards */}
        <div className="instituto-cards">
          {cards.map((card) => (
            <div key={card.id} className="instituto-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
