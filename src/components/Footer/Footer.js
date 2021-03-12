
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-Style">

        <section class="d-flex justify-content-center mt-5 h-5 sec-style" >
              <div class="justify-content-around p-5">
        
                  <h1 style={{color:'white'}}>
                      LET'S STAY IN TUCH
                  </h1>
                  <h6 id="h-style">Get updates , specials and more
                  </h6>
                 <h6 id="style-h" >
                  championsleague.com <FontAwesomeIcon icon={faEnvelope} /> | Terms of Use and Sale |Privacy Policy 
                   
                
                 </h6>
        
              </div>
          </section>
            
        </div>
    );
};

export default Footer;