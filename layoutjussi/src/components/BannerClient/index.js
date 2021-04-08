import React from 'react';
import './../../assets/scss/main.scss';

import arrow from './../../assets/img/arrow.svg';
import brastemp from './../../assets/img/logo-brastemp.png';
import compraCerta from './../../assets/img/logo-compra-certa.png';
import consul from './../../assets/img/logo-consul.png'
import theBar from './../../assets/img/logo-thebar.png';

export default function BannerClient(){
    return(
        <div className="bannerClient" >
            <p>Nossas principais lojas VTEX</p>
            <img src={arrow} alt="flecha"/>
            <img src={brastemp} alt="logo Brastemp" />
            <img src={compraCerta} alt="logo Compra Certa" />
            <img src={consul} alt="logo Consul"/>
            <img src={theBar} alt="logo TheBar" />        
        </div>
    );
}