import React from 'react'
import './styles.scss'

import products from '../../stores/productsArray'

import HeaderMenu from '../../components/HeaderMenu'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

export default function Sobre() {
  return (
    <>
        <HeaderMenu active="sobre"/>
        <div className="tempContainer">
            <h2>PAGE SOBRE</h2>
        </div>
        <Footer />
    </>
  )
}
