import React from 'react'
import CV from '../../assets/img/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CV-MinhTuanVo-ReactJS.pdf" className='btn'>Dowload CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
export default CTA
