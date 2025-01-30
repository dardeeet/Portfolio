import React, { useEffect, useState } from "react";
import "./../css/Competences.css";

// Liste des compétences classées par expérience + niveaux du programme national
const skillsData = [
  {
    category: "IUT Paul Sabatier - Toulouse, Auch, Castres",
    skills: [
      { name: "Méthodes agiles", level: 2 },
      { name: "Spring Boot", level: 2 },
      { name: "C++", level: 2 },
      { name: "JavaScript", level: 2 },
      { name: "Feuilles de style en cascade (CSS)", level: 2 },
      { name: "HTML", level: 2 },
      { name: "Développement de logiciels", level: 3 },
    ],
  },
  {
    category: "Denjean Transports",
    skills: [
      { name: "WordPress", level: 2 },
      { name: "Échange de données informatisé", level: 2 },
      { name: "Python (langage de programmation)", level: 2 },
    ],
  },
  {
    category: "AYOTI",
    skills: [
      { name: "C#", level: 3 },
      { name: "Développement web", level: 3 },
      { name: "Développement front-end", level: 3 },
      { name: "Bases de données", level: 3 },
    ],
  },
];

function Competences() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    document.title = "Compétences - Portfolio de Lenny Dardet";
  }, []);

  return (
    <div className="competences-container">
      <h1>Compétences</h1>
      <p>
        Voici un aperçu des compétences que j'ai acquises à travers mes études et mes expériences professionnelles,
        ainsi que leur niveau selon le programme national du BUT Informatique.
      </p>

      <div className="competences-list">
        {skillsData.map((section, index) => (
          <div key={index} className="competence-section">
            <button
              className="competence-category"
              onClick={() =>
                setActiveCategory(activeCategory === section.category ? null : section.category)
              }
            >
              {section.category} {activeCategory === section.category ? "▲" : "▼"}
            </button>
            {activeCategory === section.category && (
              <ul className="skills-list">
                {section.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    {skill.name}
                    <span className={`skill-level level-${skill.level}`}>
                      Niveau {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <section className="competence-section">
        <h2>Expériences Professionnelles</h2>
        <div className="competence-experience">
          <h3>Alternance - Ayoti (Décembre 2024 - Juin 2025)</h3>
          <p>Création d'une application web et d'un logiciel pour les professionnels du transport de voyageurs.</p>
        </div>
        <div className="competence-experience">
          <h3>Stage - Denjean Transports (Juillet - Août 2024)</h3>
          <p>Participation à la mise à jour du site internet et réalisation de scripts pour les échanges de données électroniques (EDI).</p>
        </div>
        <div className="competence-experience">
          <h3>Animateur - CCAS (Depuis 2021)</h3>
          <p>Encadrement de groupes d’enfants de 8 à 17 ans, gestion d'activités et développement de compétences en communication et gestion de groupe.</p>
        </div>
      </section>

      <section className="competence-section">
        <h2>Autres Compétences</h2>
        <ul className="competence-list">
          <li>BAFA - Brevet d’Aptitude aux Fonctions d’Animateur</li>
          <li>Permis B - Véhicule personnel</li>
          <li>Montage photo et vidéo</li>
        </ul>
      </section>
    </div>
  );
}

export default Competences;
