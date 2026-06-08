import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

import alimentacaoSolidaria from "../images/alimentacaoSolidaria.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image06 from "../images/image06.jpeg";
import image07 from "../images/image07.jpeg";
import encontro from "../images/encontro.jpeg";
import encontro02 from "../images/encontro02.jpeg";
import encontro03 from "../images/encontro04.jpeg";
import batalha from "../images/batalha.jpeg";
import batalha02 from "../images/batalha02.jpeg";
import batalha04 from "../images/batalha04.jpeg";
import batalha05 from "../images/batalha05.jpeg";

const projectList = [
  {
    id: 1,
    tag: "🤝 Comunidade",
    title: "ENCONTRO INFLUENCIE",
    description:
      "Todo primeiro sábado do mês, realizamos o ENCONTRO INFLUENCIE na praça do CISA BETONEX, a mais movimentada do bairro. Nesses encontros sempre temos surpresas — já descobrimos casos de abuso sexual, depressão profunda e até intenções suicidas. A atividade atrai dezenas de vidas que lutam para se tornar pessoas melhores. Sempre buscamos lembrá-los de suas capacidades e principalmente que eles não estão sozinhos.",
    images: [encontro, encontro02, encontro03],
  },
  {
    id: 2,
    tag: "⚽ Esporte",
    title: "JARDIM HOLANDÊS FC",
    description:
      "O Jardim Holandês FC utiliza o futebol para atrair crianças e identificar de forma profunda como ajudá-las. Antes do futebol temos a famosa RODA DE CONVERSA — 30 minutos falando sobre temas levantados pelos próprios jovens: ansiedade, depressão, medo, futuro e valores. Após as atividades, cedemos lanche para todas as crianças, sendo esse um dos momentos mais importantes para muitos que se encontram em situação de vulnerabilidade social.",
    images: [image3, alimentacaoSolidaria, image2, image4, image5, image06, image07],
  },
  {
    id: 3,
    tag: "🎤 Cultura",
    title: "BATALHA DO HOLANDÊS",
    description:
      "Assim como no futebol, o intuito da batalha de rima é se aproximar da juventude local através do hip-hop. Procuramos trazer uma outra perspectiva para as crianças da região, pois muitos ainda enxergam apenas o futebol como opção. As batalhas são incríveis, com temas debatidos em forma de rap: classes sociais, igualdade, política, racismo e muitos outros assuntos que surgem conforme a batalha acontece.",
    images: [batalha, batalha02, batalha04, batalha05],
  },
];

const Projects = () => {
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() =>
    setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }))
  , []);

  const next = useCallback(() =>
    setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }))
  , []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  return (
    <div className="projects-page">

      {/* ── Hero ────────────────────────────────────── */}
      <div className="projects-hero">
        <div className="projects-hero-inner">
          <span className="projects-hero-label">✦ O que fazemos</span>
          <h1>Nossos <span>Projetos</span></h1>
          <p className="projects-intro">
            Conheça as iniciativas que desenvolvemos para promover o bem-estar e o
            desenvolvimento da nossa comunidade. Nossos projetos transformam vidas,
            fortalecem vínculos sociais e promovem oportunidades que geram impacto
            real e duradouro.
          </p>
        </div>
      </div>

      {/* ── Lista de projetos ────────────────────────── */}
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* Número decorativo de fundo */}
            <span className="project-number-bg">
              {String(project.id).padStart(2, "0")}
            </span>

            {/* Conteúdo de texto */}
            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <p className="project-number-badge">
                Projeto {String(project.id).padStart(2, "0")} / {String(projectList.length).padStart(2, "0")}
              </p>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Carrossel */}
            <div className="project-carousel">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="project-image"
                      style={{ cursor: "zoom-in" }}
                      onClick={() => openLightbox(project.images, i)}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/460x300.png?text=Imagem+Nao+Disponivel")
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ──────────────────────────────── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>&#8249;</button>
          )}

          <img
            className="lightbox-img"
            src={lightbox.images[lightbox.index]}
            alt="Foto ampliada"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>&#8250;</button>
          )}

          <span className="lightbox-counter">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Projects;
