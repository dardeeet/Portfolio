import React, { useEffect } from "react";
import "./../css/Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "Contact - Portfolio de Lenny Dardet";
      }, []);
  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <p>N'hésitez pas à me contacter pour toute demande d'information.</p>

      <div className="contact-info">
        <p><strong>Email :</strong> <a href="mailto:lenny.dardet.corps@gmail.com">lenny.dardet.corps@gmail.com</a></p>
        <p><strong>Téléphone :</strong> <a href="tel:+33778151797">07 78 15 17 97</a></p>
        <p><strong>Adresse :</strong> 118 route de Narbonne, Résidence Clément Ader D33, 31400 Toulouse</p>
        <p><strong>LinkedIn :</strong> <a href="www.linkedin.com/in/lenny-dardet-a1042a254">Ici</a></p>
      </div>

      {/* Formulaire de contact (optionnel) */}
      <form className="contact-form">
        <h2>Envoyez-moi un message</h2>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
