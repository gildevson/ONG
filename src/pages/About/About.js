import React from "react";
import "./About.css"; 
import logo from "./logo.png"; // Substitua pelo caminho correto da sua imagem

const About = () => {
    return (
        <div className="about-container">
            <img src={logo} alt="Instituto Influenciando Gerações" className="about-logo" />
            <h1 className="about-title">Quem Somos ? </h1>
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
        </div>
    );
};

export default About;