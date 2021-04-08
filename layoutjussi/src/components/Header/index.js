import React, { useEffect, useState } from 'react';
import './../../assets/scss/main.scss';

import logoJussi from './../../assets/img/logoJussiVectorGreen.svg';
import cart from './../../assets/img/shopping-cart.svg';
import magnifier from './../../assets/img/search.svg';

export default function Header(){
    const [result, setResult]= useState({});
    const [busca, setBusca]= useState([]);

    useEffect(()=>{
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
        .then((response) => response.Json())
        .then((response)=>{
            setResult(response.data);
        })
    },[busca]);

    return(
        <div className="header" >
            <div className="header__left">
                <img src={logoJussi} alt="logo Jussi"/>
                <a href="/">Nossas soluções</a>
                <a href="/">Conheça a Jüssi</a>
            </div>
            <div className="header__rigth">
                <div className="header__rigth__search">
                    <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Busca"/>
                    <img src={magnifier} alt="Pesquisa"/>
                </div>
{/*                 <ul>
                    {result.map((produto) =>{
                        <li key={produto.id}>
                            {produto.name}
                        </li>
                    })
                    }
                </ul> */}
                <a href="/">Login</a>
                <img src={cart} alt="Carrinho de compra"/>
            </div>
        </div>
    );
}