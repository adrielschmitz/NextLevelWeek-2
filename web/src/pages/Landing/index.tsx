import React from 'react'
import logo_img from '../../assets/images/logo.svg'
import landing_img from '../../assets/images/landing.svg'

import study_icon from '../../assets/images/icons/study.svg'
import give_classes_icon from '../../assets/images/icons/give-classes.svg'
import purple_heart_icon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logo_img} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing_img} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <a href="" className="study">
            <img src={study_icon} alt="Estudar"/>
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={give_classes_icon} alt="Dar aulas"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purple_heart_icon} alt="Coração roxo"/>
        </span>

      </div>
    </div>
  )
}

export default Landing