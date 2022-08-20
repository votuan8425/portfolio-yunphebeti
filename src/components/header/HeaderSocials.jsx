import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yunphe/" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/votuan8425" target="_blank" title='Github'><FaGithub/></a>
        <a href="https://www.facebook.com/minhtuan.vo.56808/" target="_blank" title='Facebook'><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials