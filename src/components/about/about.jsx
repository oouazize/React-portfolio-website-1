import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFolder2Open } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about-me-image'>
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
                <FaAward />
                <h5>Experience</h5>
                <small>3+ years working</small>
            </article>
            <article className='aboout_card'>
                <FiUsers />
                <h5>Clients</h5>
                <small>300+ worldwide</small>
            </article>
            <article className='aboout_card'>
                <BsFolder2Open />
                <h5>Projects</h5>
                <small>80+ completed</small>
            </article>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nulla libero nostrum in! Provident, amet laborum modi accusamus similique iste veritatis quis at doloribus, libero laudantium perspiciatis sapiente repudiandae dignissimos?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About