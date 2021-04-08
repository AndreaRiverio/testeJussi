import React from 'react';
import './../../assets/scss/main.scss';

export default function Newsletter(){
    return(
        <div className="newsletter" >
            <div className="newsletter__left">
                <span>//</span>
            </div>
            <div className="newsletter__rigth">
                <p>receba novidades da nossa área</p>
                <p>de produtos digitais.</p>
                <div className="newsletter__rigth__submit">
                    <input type="email" placeholder="Digite seu email"/>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}