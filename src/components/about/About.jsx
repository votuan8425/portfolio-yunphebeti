import React from 'react'
import './about.scss'
import aboutMe from '../../assets/img/me11.jpg'
import { FaAward } from 'react-icons/fa'
import {MdGolfCourse} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <div className="section__content">
        Get To Know
      </div>
      <div className="section__title">
        About Me
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__item">
              <FaAward className='about__icon' />
              <div className="title">Experience</div>
              <div className="paragraph">
                5+ Months Working <br/>(Internship on HTML, CSS, JS,... )
              </div>
            </article>

            <article className="about__item">
              <MdGolfCourse className='about__icon' />
              <div className="title">Courses</div>
              <div className="paragraph">
                2+ Courses On Udemy (ReactJS)
              </div>
            </article>

            <article className="about__item">
              <VscFolderLibrary className='about__icon' />
              <div className="title">Projects</div>
              <div className="paragraph">
                5+ Projects On University
              </div>
            </article>

          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About