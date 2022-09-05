import React from 'react'
import './portfolio.scss'
import PJ1 from '../../assets/img/image-pj1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='section__content'>My Recent Project</div>
      <div className='section__title'>Portfolio</div>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PJ1} alt="" />
          </div>
          <h3>NFT Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/votuan8425/Yun-NFTs-ReactJS" rel="noreferrer" className='btn' target='_blank'>Github</a>
            <a href="https://yunphe-nft.netlify.app" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio