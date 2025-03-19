import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

// Importando imagem principal
import image1 from "../../assets/image1.jpg";

// Importando imagens dos apoiadores (garanta que são diferentes!)
import supporter1 from "../../assets/image1.jpg";
import supporter2 from "../../assets/image1.jpg";
import supporter3 from "../../assets/image1.jpg";
import supporter4 from "../../assets/image1.jpg";
import supporter5 from "../../assets/image1.jpg";

// Ícones para os cards principais
import { FaHandsHelping, FaBookOpen, FaUsers, FaHeart } from "react-icons/fa";

// Dados dinâmicos para os cards principais
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

// Dados dinâmicos para os apoiadores
const supporters = [
  { id: 1, name: "Certificada", logo: supporter1 },
  { id: 2, name: "Selo ODS", logo: supporter2 },
  { id: 3, name: "Prêmio Impulso", logo: supporter3 },
  { id: 4, name: "Prêmio Comunicação", logo: supporter4 },
  { id: 5, name: "BNI Member", logo: supporter5 },
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

        {/* 🔹 Seção de Apoiadores */}
        <div className="instituto-supporters">
          <h2 className="supporters-title">Nossos Apoiadores</h2>
          <div className="supporters-cards">
            {supporters.map((supporter) => (
              <div key={supporter.id} className="supporter-card">
                <img src={supporter.logo} alt={supporter.name} className="supporter-logo" />
                <p className="supporter-name">{supporter.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
