import React from 'react'
import './styles.scss'
import '../../assets/imgs/SlidesCarousel/styles.scss'


export default function Cards( {nome, preco, url, id} ) {

    const marca = nome.split(' ');

  return (
    <div className="b-game-card">
        <div className="b-game-card__cover" >
            <div className="topCard">
                <div className="titleCard">
                    {nome}
                </div>
                <div className="priceCard">
                    R${preco}
                </div>
            </div>
            
            <div className="bgImage">
                <img src={`http://${url}`} alt='Product'/>
                <span> {marca[0]}</span>
            </div>
            
            <div className="botCard">
                <a href='/' className='buyButton'>COMPRAR AGORA</a>
                <a href='/' className='cartIcon'>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}
