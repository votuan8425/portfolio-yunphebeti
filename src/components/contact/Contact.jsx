import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BiPhoneCall } from 'react-icons/bi'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3p3hcs9', 'template_7lha3dw', form.current, 'dfWhZ7AzKwFl7j4aQ');
    toast.success("Your message  has been sent !!!");
    e.target.reset();
  }
  return (
    <section id='contact'>
      <div className="section__content">
        Get In Touch
      </div>
      <div className="section__title">
        Contact Me
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <div className="title">Email</div>
            <div className="paraphrase">yuntuan11309@gmail.com
            </div>
            <a href="mailto:sgkcd1231@gmail.com">Send a message</a>

          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <div className="title">Messenger</div>
            <div className="paraphrase">
            </div>
            <a href="https://m.me/minhtuan.vo.56808">Send a message</a>
          </article>
          <article className='contact__option'>
            <BiPhoneCall className='contact__option-icon' />
            <div className="title">Phone</div>
            <div className="paraphrase">
              +84349958009
            </div>
            <a href="tel:+84349958009">Call me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact