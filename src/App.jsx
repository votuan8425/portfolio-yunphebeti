import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
// import Services from './components/services/Services.jsx'
// import Portfolio from './components/portfolio/Portfolio.jsx'
// import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import { ToastContainer } from 'react-toastify';
import Portfolio from './components/portfolio/Portfolio.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services/>
      <Portfolio/>
      <Testimonials/> */}
      <Portfolio/>
      <Contact />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App