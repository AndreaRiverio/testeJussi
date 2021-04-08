import React from 'react';
import './../../assets/scss/main.scss';

import imageJussi from './../../assets/img/image-jussi.png';

export default function Jussi(){
    return(
        <div className="jussi">
            <div className="jussi__left">
                <h2>Olá, somos a Jüssi</h2>
                <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                <a href="https://jussi.com.br/">Conheça a Jüssi</a>
            </div>
            <div className="jussi__center">
                <img src={imageJussi} alt="icon facebook"/>
            </div>
            <div className="jussi__right">
            </div>
        </div>
    );
}