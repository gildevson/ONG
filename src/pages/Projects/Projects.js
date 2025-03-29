import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

// Importando imagens locais (Se estiver usando src/)
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

// Lista de projetos com imagens corrigidas
const projectList = [
  {
    id: 1,
    title: "ENCONTRO INFLUENCIE",
    description:
      "ENCONTRO INFLUENCIE - Todo primeiro sábado do mês, realizamos o ENCONTRO INFLUENCIE na praça do CISA BETONEX, a mais movimentada do bairro, nesses encontros que promovemos nas praças, sempre temos surpresas. Já descobrimos abuso sexual, depressão profunda e até intenções suicidas. Essa atividade sempre atrai dezenas de vidas, que sempre estão ali conosco lutando para se tornar pessoas melhores e vencer as crises e dificuldades que a vida lhes traz. Nesses encontros, sempre buscamos lembrá-los de suas capacidades e principalmente, que eles não estão sozinhos, que podem sim, independente das barreiras vencer na vida e iniciar uma história cheia de conquistas e realizações.",
    images: [encontro, encontro02, encontro03],
    
  },
  {
    id: 2,
    title: "JARDIM HOLANDES FC",
    description:
      "JARDIM HOLANDÊS FC - O Jardim holandês fc, é um projeto que, utiliza o esporte, mais especificamente o futebol para atrair as crianças para o nosso espaço e assim, identificar de forma mais detalhada e profunda como ajudá-las. Basicamente usamos o futebol como isca pois por exemplo, antes do futebol tem a nossa famosa RODA DE CONVERSA, um momento em que ficamos 30 minutos falando sobre algum tema que é levantado por eles mesmo ali no momento como ANSIEDADE, DEPRESSÃO, MEDO, FUTURO, VALORES e por aí vai, sempre são momentos muito interessantes onde eles interagem entre si e automaticamente se ajudam. Além disso, após o final das atividades, também cedemos o lanche para todas as crianças que participaram conosco das atividades, sendo esse um dos momentos mais importantes pra muitos, já que muitos se encontram em situação de vulnerabilidade social.",
    images: [image3, alimentacaoSolidaria,image2,image4,image5, image06,image07],
    
  },
  {
    id: 3,
    title: "BATALHA DO HOLANDES",
    description:
      "Assim como no futebol, o intuito da nossa batalha de rima é se aproximar da juventude local só que dessa vez, através do hip-hop. Mas não só isso, nós também procuramos, através da batalha trazer e mostrar uma outra perspectiva para as crianças da região, pois, muitos ainda enxergam apenas o futebol como opção e esquecem às tantas outras possibilidades em seus caminhos. As batalhas sempre são incríveis, com diversos assuntos sendo colocados em pauta e debatidos em forma de rap, como por exemplo classes sociais, igualdade, política, racismo e muitos outros temas que surgem conforme a batalha acontece.",
    images: [batalha, batalha02,batalha04,batalha05],
    
  }, 
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
