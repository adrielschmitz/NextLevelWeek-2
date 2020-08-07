import React from 'react';
import whatsapp_icon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/42657151?s=460&u=8dd1e39319f3a39bc35e175cf0df82324b500ddc&v=4" alt="Adriel Schmitz"/>
        <div>
          <strong>Adriel Schmitz</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Bla bla bla Bla bla bla Bla bla bla Bla bla bla <br/>
        Bla bla bla Bla bla bla Bla bla bla Bla bla bla v Bla bla bla Bla bla Bla bla bla
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>RS 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsapp_icon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;