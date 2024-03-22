import React from 'react'
import '../style/map.scss'
import { FaArrowLeft } from "react-icons/fa6";

const map = () => {
  return (
    <>
    <div className="map-page">
        <div className="map-heading">
             <div className="arrow"><FaArrowLeft  /></div>
            <h1>Live Map</h1>
        </div>
        <div className="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117676.79402006012!2d75.72144470037253!3d22.824693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1711036999419!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default map
