import React from 'react'

import "../app/css/whatsapp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export const ContactoFlotante = () => {
    return (
        <a href="https://wa.link/k7u0ip" className="btn-wsp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    )
}