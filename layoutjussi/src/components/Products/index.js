import React from 'react';
import './../../assets/scss/main.scss';

export default function Products(){
    return(
        <div className="container">
            <div className="container__title">
                <p>//</p>
                <h1>Nossas soluções</h1>
            </div>
            <div className="container__products">
                <div className="container__products__product">
                    <div className="container__products__product__imagem">
                        <span>P1</span> 
                    </div>       
                    <div className="container__products__product__desc">
                        <p>Nome do produto #1</p>
                        <p>Descrição do produto #4</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <button>Ver solução</button>
                </div>
                <div className="container__products__product">
                    <div className="container__products__product__imagem">
                        <span>P2</span>  
                    </div>      
                    <div className="container__products__product__desc">
                        <p>Nome do produto #2</p>
                        <p>Descrição do produto #4</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <button>Ver solução</button>
                </div>
                <div className="container__products__product">
                    <div className="container__products__product__imagem">
                        <span>P3</span>     
                    </div>       
                    <div className="container__products__product__desc">
                        <p>Nome do produto #3</p>
                        <p>Descrição do produto #4</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <button>Ver solução</button>
                </div>
                <div className="container__products__product">
                    <div className="container__products__product__imagem">
                        <span>P4</span>     
                    </div>     
                    <div className="container__products__product__desc">
                        <p>Nome do produto #4</p>
                        <p>Descrição do produto #4</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <button>Ver solução</button>
                </div>
            </div>
        </div>
    );
}