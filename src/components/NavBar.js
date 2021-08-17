import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <div className="topbar-fix">
                <div className="topbar-fix-left">
                    <div className="topbar-fix-left-bt">
                      
                        <p><FontAwesomeIcon icon={faAddressCard} /> Contact</p> 
                    </div>
                    <div className="topbar-fix-left-bt">
                         
                       <p><FontAwesomeIcon icon={faPhoneSquareAlt} /> +00 1234 123 456</p>  
                    </div>
                </div>
                <p>Bienvenue sur Getting-web.com </p>
            </div>
            <div className="nav">
                <h1><img src={process.env.PUBLIC_URL + '/getting-web-logo.png'} width="50px"/></h1>
                <ul className="nav-right">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
