import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

// Importando imagens locais (Se estiver usando src/)
import alimentacaoSolidaria from "../images/alimentacaoSolidaria.jpg";
import batalhaRap from "../images/alimentacaoSolidaria.jpg";

// Lista de projetos com imagens corrigidas
const projectList = [
  {
    id: 1,
    title: "Projeto de Apoio Escolar",
    description:
      "Oferecemos reforço escolar e materiais didáticos para crianças e adolescentes em situação de vulnerabilidade.",
    images: [alimentacaoSolidaria, batalhaRap, alimentacaoSolidaria],
    items: ["Reforço escolar personalizado", "Doação de livros", "Aulas online"]
  },
  {
    id: 2,
    title: "Projeto de Alimentação Solidária",
    description:
      "Distribuímos refeições e cestas básicas para famílias carentes em diversas regiões.",
    images: [alimentacaoSolidaria, batalhaRap, alimentacaoSolidaria],
    items: ["Coleta de alimentos", "Preparo de refeições", "Entrega a comunidades"]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Nossos Projetos</h1>
      <p className="projects-intro">
        Conheça as iniciativas que desenvolvemos para promover o bem-estar e o desenvolvimento da nossa comunidade.
      </p>

      {projectList.map((project) => (
        <div key={project.id} className="project-row">
          <div className="project-text">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {project.items && (
              <ul className="project-list">
                {project.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Carrossel de Imagens */}
          <div className="project-carousel">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    className="project-image"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x250.png?text=Imagem+Nao+Disponivel")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
