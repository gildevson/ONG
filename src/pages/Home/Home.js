import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../../components/Loading"; // Caminho correto para importar o Loading

// Importando imagem principal
import image1 from "../../assets/image1.jpg";

// Importando imagens dos apoiadores
import supporter1 from "../../assets/apoiador1.png";
import supporter2 from "../../assets/apoiador2.jpeg";

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
  { id: 1, name: "Henrique Imóvel Legal", logo: supporter1 },
  { id: 2, name: "CECOVI", logo: supporter2 },
];

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  // Função para exibir a tela de carregamento antes de redirecionar
  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/transparencia"); // Redireciona após 2 segundos
    }, 2000);
  };

  return (
    <div className="home-wrapper">
      {/* Exibe a tela de carregamento enquanto o estado estiver ativo */}
      {loading && <Loading />} 

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
          <button onClick={handleNavigation} className="instituto-button">
            Saiba Mais <FaArrowRight />
          </button>
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
          {/* 🔹 Card informativo antes dos apoiadores */}
          <div className="supporters-highlight">
            <h3>Principais Apoiadores</h3>
            <p>Essas empresas são fundamentais para o nosso projeto, fornecendo suporte para nossas ações sociais. Agradecemos por acreditarem em nossa missão!</p>
          </div>

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
