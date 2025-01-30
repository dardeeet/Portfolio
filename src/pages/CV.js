import React, { useEffect } from "react";
import "./../css/CV.css";
import cvFile from "./../assets/CV_Lenny_DARDET.pdf";

function CV() {
  useEffect(() => {
      document.title = "CV - Portfolio de Lenny Dardet";
    }, []);
    return (
      <div className="cv-container">
        <h1>Mon CV</h1>
        <p>
          Voici mon CV détaillant mon parcours académique, mes compétences et mes expériences professionnelles.
          Vous pouvez le visualiser ci-dessous ou le télécharger.
        </p>
  
        {/* Visionneuse du CV */}
        <div className="cv-viewer">
          <iframe src={cvFile} title="CV Lenny Dardet" className="cv-iframe"></iframe>
        </div>
  
        {/* Bouton de téléchargement */}
        <a href={cvFile} download="CV_Lenny_DARDET.pdf" className="cv-button">
          Télécharger mon CV
        </a>
      </div>
    );
  }
  
  export default CV;
