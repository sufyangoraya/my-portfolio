import { FaFacebook, FaLinkedin, FaGithub, FaInstagram,  FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import React from 'react'

export default function Footer() {
  return (
    
    <div className=" hover:scale-100 space-x-11 flex justify-center align-middle space-x-2 bg-gradient-to-br from-purple-300 via-blue-400 to-pink-400 p-8">
      <h2 className="flex justify-start"> you can also contact me via </h2> 
      <a href="https://www.facebook.com/share/17HbFavbG9/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="https://github.com/sufyangoraya" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/sufyan.goraya.2005/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
          <a href="https://wa.me/+923103013067
" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} />
      </a>
      <a href="https://www.linkedin.com/in/sufyan-goraya-331b8637b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin size={24} />
      </a>
      <a href="https://x.com/0x_Sufyan?t=BoTDScTHIIKzZuciK2YdxQ&s=09">
        <FaXTwitter size={24} />
      </a>
    </div>
  )
}


