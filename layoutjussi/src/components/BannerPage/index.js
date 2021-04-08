import React from 'react';
import './../../assets/scss/main.scss';

import batedeira from './../../assets/img/batedeira.png';
import geladeira from './../../assets/img/geladeira.png';
import whiskey from './../../assets/img/whiskey.png';


export default function BannerPage(){
    return(
        <div className="bannerPage" >
            <div className="bannerPage__left">
                <span>//</span>
            </div>
            <div className="bannerPage__center">
                <p>Criamos lojas que vendem mais.</p>
                <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                <a href="/">Veja nossas soluções</a>
            </div>
            <div className="bannerPage__rigth">
                <div className="bannerPage__rigth__product">
                    <img src={whiskey} alt="whiskey"/> 
                    <a href="/">Comprar em 12x</a>
                </div>
                <div className="bannerPage__rigth__product">
                    <img src={geladeira} alt="geladeira"/>
                    <a href="/">Mais Detalhes</a>
                </div>
                <div className="bannerPage__rigth__product">
                    <img src={batedeira} alt="batedeira"/>
                    <a href="/">Adicionar à sacola</a>
                </div>
            </div>
        </div>
    );
}