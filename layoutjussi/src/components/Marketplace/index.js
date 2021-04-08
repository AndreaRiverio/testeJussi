import React from 'react';
import './../../assets/scss/main.scss';

export default function Marketplace(){
    return(
        <div className="marketplace" >
            <div className="marketplace__top">
                <p>Essa loja foi construída usando uma das</p>
                <p>nossas soluções da plataforma VTEX.</p>
                <p>tenha a sua.</p>
            </div>
            <div className="marketplace__bottom">
                <p>Entre em contato</p>
                <p>comercial@jussi.com.br</p>
            </div>
        </div>
    );
}