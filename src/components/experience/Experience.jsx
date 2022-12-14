import React from 'react'
import './experience.scss'
import { BsPatchCheckFill } from 'react-icons/bs'
import { TiHtml5, TiCss3, } from 'react-icons/ti'
import { FaReact, FaBootstrap } from 'react-icons/fa'
import { DiMsqlServer } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'
import { SiTypescript, SiSpringboot, SiAdobephotoshop, SiOracle, SiNodedotjs, SiJavascript } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="section__content">
        What Skills I Have
      </div>
      <div className="section__title">
        My Experience
      </div>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__title">
            Frontend Development
          </div>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">HTML <TiHtml5 /></div>
                <div className="experience__expert">Experienced</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">CSS <TiCss3 /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">JavaScript <SiJavascript /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">ReactJS <FaReact /></div>
                <div className="experience__expert">Basic</div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Bootstrap<FaBootstrap /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Adobe Photoshop<SiAdobephotoshop /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">NextJS<TbBrandNextjs /></div>
                <div className="experience__expert">Basic</div>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Typescript<SiTypescript /></div>
                <div className="experience__expert">Basic</div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <div className="experience__title">
            Backend Development
          </div>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Node JS <SiNodedotjs /></div>
                <div className="experience__expert">Basic</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">SQL Server<DiMsqlServer /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Oracle<SiOracle /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">Spring Boot<SiSpringboot /></div>
                <div className="experience__expert">Basic</div>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <div className="experience_skill">MySQL<GrMysql /></div>
                <div className="experience__expert">Intermediate</div>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="experience__workflow">
          <div className="title">Work Flow</div>
          <div className="workflow__content">
            <div className="item">
              <HiShieldCheck />
              <div className="paraphrase">
                Git, Github, SVN,... for Teamwork
              </div>
            </div>
            <div className="item">
              <HiShieldCheck />
              <div className="paraphrase">
                Testing & Debugging
              </div>
            </div>
            <div className="item">
              <HiShieldCheck />
              <div className="paraphrase">
                Responsive Web Design
              </div>
            </div>
            <div className="item">
              .....
            </div>
            <div className="item">
              <HiShieldCheck />
              <div className="paraphrase">
              If you do not have an awesome brain, you have to ceaselessly learn!

              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience