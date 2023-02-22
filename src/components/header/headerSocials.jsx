import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/oouazize" target="_blank" rel="noreferrer"><AiFillGithub /></a>
        <a href="https://www.instagram.com/0ussama_0z/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/oussama-ouazize-6839091b8/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
    </div>
  )
}

export default headerSocials