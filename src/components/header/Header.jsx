import React from 'react'
import './header.scss'
import CTA from './CTA'
import me from '../../assets/img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
          <div className="header__title">Hello I'm Vo Minh Tuan</div>
          <div className="header__position">Front End Developer</div>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={me} alt="" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header