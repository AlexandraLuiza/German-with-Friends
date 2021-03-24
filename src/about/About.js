import React from "react";
import "./About.css";

const about = () => {
  return (
    <div>
      <h2 className="about">About Us</h2>
      <div className="introparag">
        <p>Welcome at German with Friends.</p>

        <p>
          I am Luiza and I am a philologist who graduated from Foreign Language
          University. My love for German Language inspired me to create this
          site, where you can learn German while having fun. Here you can find
          anything about German Grammar, Speaking skills and tips for you
          writting essays.
        </p>
        <p>
          You will have the opportunity to meet new people and also to help
          others improving their language skills.
        </p>
        <p>
          For any question, please send me an e-mail using the contact form or
          use the chatbot for Grammar questions.
        </p>
      </div>
      <div>
        <img className="languages" src="languages.jpeg" alt="languages"></img>
      </div>
    </div>
  );
};

export default about;
