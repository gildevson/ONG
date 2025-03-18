import React from "react";
import "./About.css";
import logo from "./logo.png"; // Substitua pelo caminho correto da sua imagem

const About = () => {
  return (
    <div className="about-container">
      {/* Seção Quem Somos */}
      <img src={logo} alt="Instituto Influenciando Gerações" className="about-logo" />
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
      <p className="about-text">
        Nosso compromisso é formar cidadãos íntegros e preparados para transformar a sociedade. Seja no esporte, na música, 
        na educação ou no mercado de trabalho, queremos garantir que nossos jovens tenham as ferramentas necessárias para 
        conquistar um futuro digno e promissor.
      </p>

      {/* Seção Nossa História */}
      <div className="history-section">
        <h2 className="history-title">Nossa História</h2>
        <p className="history-text">
          Nosso fundador e atual presidente, <strong>Matheus Saimon</strong>, cresceu no bairro onde hoje o Instituto atua e foi fundado.
          Desde pequeno, viu de perto a violência, o crime e as drogas destruindo grande parte das coisas que amava ao seu redor.
        </p>
        <p className="history-text">
          Em 2018, seu irmão <strong>Rafael Wesley</strong> foi vítima da violência e do crime, sendo assassinado com 8 tiros na rua de sua casa.
          Esse momento foi decisivo para que Matheus decidisse transformar sua dor em ação.
        </p>
        <p className="history-text">
          Ele começou ajudando projetos sociais locais e, em 2023, fundou sua própria ONG, o <strong>Instituto Influenciando Gerações</strong>,
          que hoje atende centenas de crianças todo fim de semana em sua cidade.
        </p>
      </div>
    </div>
  );
};

export default About;
