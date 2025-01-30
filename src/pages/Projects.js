import React, { useEffect } from "react";
import "./../css/Projects.css";

// Importation des images
import cabinetMedicalImg from "./../assets/cabinet_medical.png";
import suiviFormationImg from "./../assets/suivi_formation.png";
import webCryptoImg from "./../assets/web_crypto.png";
import guichetBancaireImg from "./../assets/guichet_bancaire.png";

function Projects() {
  useEffect(() => {
    document.title = "Projets - Portfolio de Lenny Dardet";
  }, []);

  const projects = [
    {
      title: "Cabinet Médical (PHP)",
      description:
        "Une application web développée en PHP permettant la gestion d'un cabinet médical, incluant la gestion des patients, des rendez-vous et du personnel médical.",
      link: "https://github.com/maelgoujon/Cabinet-Medical-PHP.git",
      image: cabinetMedicalImg,
    },
    {
      title: "Suivi de Formation (Spring Boot)",
      description:
        "Un projet en Spring Boot pour la gestion du suivi des formations, avec une architecture backend robuste et une base de données relationnelle. Le projet vise à créer une application web pour une association accompagnant des handicapés.",
      link: "https://github.com/maelgoujon/Suivi-de-formation-Spring-Boot",
      image: suiviFormationImg,
    },
    {
      title: "Web Crypto (SAE)",
      description:
        "Un projet web en React et Node.js permettant la participation à une loterie de cryptomonnaies, avec une gestion sécurisée des transactions. Pour ce faire nous avons utilisé MetaMask et le testnet Sepolia.",
      link: "https://github.com/7stuart/web_crypto_sae",
      image: webCryptoImg,
    },
    {
      title: "Guichet Bancaire (Windev)",
      description:
        "Une application de guichet bancaire réalisée avec Windev, permettant des opérations bancaires comme le dépôt, le retrait et la consultation de comptes.",
      link: "https://github.com/maelgoujon/Guichet-Bancaire-Windev",
      image: guichetBancaireImg,
    },
  ];

  return (
    <div className="projects-container">
      <h1>Mes Projets Universitaires</h1>
      <p>
        Voici une sélection de projets que j'ai réalisés dans le cadre de mes études. Ces projets m'ont permis de développer mes compétences en développement web, backend et gestion de bases de données.
      </p>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>

      {/* Lien vers le GitHub personnel */}
      <div className="github-link">
        <h2>📂 Voir plus de projets</h2>
        <p>
          Retrouvez tous mes projets et contributions sur mon profil GitHub :
        </p>
        <a
          href="https://github.com/dardeeet"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          Mon GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
