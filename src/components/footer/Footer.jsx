import React from 'react'
import './footer.scss'
import { FaFacebookF } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>YUNPHE</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/minhtuan.vo.56808/" rel="noreferrer" target="_blank" ><FaFacebookF/></a>
        <a href="https://www.instagram.com/yunpheeeee/" rel="noreferrer" target="_blank" ><FiInstagram/></a>
        <a href="https://twitter.com/mhtuan_beti" rel="noreferrer" target="_blank" ><IoLogoTwitter/></a>
      </div>

    </footer>
  )
}

export default Footer