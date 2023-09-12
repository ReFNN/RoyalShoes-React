import React from 'react'
import './styles.scss'

import products from '../../stores/productsArray'

import HeaderMenu from '../../components/HeaderMenu'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

export default function Contato() {
  return (
    <>
        <HeaderMenu active="contato"/>
        <div className="tempContainer">
            <h2>PAGE CONTATO</h2>
        </div>
        <Footer />
    </>
  )
}
