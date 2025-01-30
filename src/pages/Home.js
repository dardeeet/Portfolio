import React, { useEffect } from "react";
import "./../css/Home.css";
import profilePhoto from "./../assets/photo_sans_fond.png"; // Utilisation de la photo sans fond

function Home() {
  useEffect(() => {
    document.title = "Accueil - Portfolio de Lenny Dardet";
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Bienvenue sur mon portfolio</h1>
          <p>Bonjour, je m'appelle <strong>Lenny Dardet</strong>. Je suis étudiant en <strong>3ème année de B.U.T Informatique</strong> à l'<strong>IUT Paul Sabatier</strong> à Toulouse.</p>
          <p>Originaire de Tarbes, j'ai obtenu mon <strong>Bac STI2D</strong> au lycée Jean Dupuy avant de poursuivre mes études en informatique.</p>
          <p>J’ai une passion pour la programmation, notamment dans le développement web, le développement logiciel et la gestion de bases de données.</p>
          <p>En dehors du code, j'aime le <strong>tennis</strong>, le <strong>football</strong> et le <strong>montage photo/vidéo</strong>.</p>
          <p>Ce site me permet de présenter mes compétences, mes projets et mon parcours professionnel. N'hésitez pas à explorer les différentes sections !</p>
        </div>
        <div className="home-image">
          <img src={profilePhoto} alt="Lenny Dardet" />
        </div>
      </div>
    </div>
  );
}

export default Home;
