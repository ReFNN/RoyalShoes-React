import React from 'react'
import './style.scss'

import products from '../../stores/productsArray'

import HeaderMenu from '../../components/HeaderMenu'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
        <HeaderMenu active="home"/>
        <div className="l-container">
            {products.map((product, index)=>{
                return (
                    <Cards 
                    key={product.id.toString()}
                    nome={product.nome} 
                    preco={product.preco}
                    url={product.url}
                    />
                );
            })}
        </div>
        <Footer />
    </>
  )
}
