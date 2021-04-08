import React from 'react';
import './../../assets/scss/main.scss';


import logoCompany from './../../assets/img/wppcompany.png';
import facebook from './../../assets/img/facebook.svg';
import instagram from './../../assets/img/instagram.svg';
import linkedin from './../../assets/img/linkedin.svg';

export default function Footer(){
    return(
        <div className="footer" >
            <div className="line_one">
                <div>
                    <img src={logoCompany} alt="Logo WPP Company" className="logo-footer" />
                </div> 
                <div className="redes_sociais">
                    <img src={facebook} alt="icon facebook" />
                    <img src={instagram} alt="icon instagram" />
                    <img src={linkedin} alt="icon linkedin" />
                </div> 
            </div>
         
        </div>
    );
}