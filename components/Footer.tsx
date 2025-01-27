import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import React from 'react'

export default function Footer() {
  return (
    
    <div className=" hover:scale-100 space-x-11 flex justify-center align-middle space-x-2 bg-gradient-to-br from-purple-300 via-blue-400 to-pink-400 p-8">
      <h2 className="flex justify-start"> you can also contact me via </h2> 
      <a href="https://www.facebook.com/Asthetic.SUFYAN" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="https://github.com/sufyangoraya" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/asthetic.sufyan/?__pwa=1" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
          <a href="https://wa.me/+923103013067
" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} />
      </a>
      <a href="https://www.linkedin.com/in/sufyan-goraya-0259652ba/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQY9KoTmmSD2i%2FQ1NtGeXfQ%3D%3D">
        <FaLinkedin size={24} />
      </a>
    </div>
  )
}


