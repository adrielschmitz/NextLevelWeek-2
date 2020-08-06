import React from 'react'
import { Link } from 'react-router-dom'
import back_icon from '../../assets/images/icons/back.svg'
import logo_image from '../../assets/images/logo.svg'

import './styles.css'

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <div className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={back_icon} alt="Voltar"/>
          </Link>

          <img src={logo_image} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>Esses são os proffys disponíveis.</strong>
        </div>
      </div>
    </div>
  )
}

export default TeacherList