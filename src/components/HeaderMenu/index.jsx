import React from 'react'
import './styles.scss'
import RoyalShoesLogo from '../../assets/imgs/HeaderMenu/logo-royal.png';

import SearchInput from './components/SearchInput';
import ButtonNav from './components/ButtonNav';

export default function HeaderMenu() {
  return (
    <header>
        <div className='container'>
            <div className='logoHeader'>
                <a href="/">
                    <img src={RoyalShoesLogo} alt="logo royal shoes" width="300px"/>
                </a>
            </div>
            <div className="navbar">
                <div className="left-navigation">
                    <ul>
                        <ButtonNav goTo='home' className='btn-nav' value='Home'/>
                        <ButtonNav goTo='masculino' className='btn-nav' value='Masculino'/>
                        <ButtonNav goTo='feminino' className='btn-nav' value='Feminino'/>
                        <ButtonNav goTo='novidades' className='btn-nav' value='Novidades'/>
                        <ButtonNav goTo='sobre' className='btn-nav' value='Sobre'/>
                        <ButtonNav goTo='contato' className='btn-nav' value='Contato'/>
                    </ul>
                </div>
                <div className="right-navigation">
                    <SearchInput/>
                    
                </div>
            </div>
        </div>
        
    </header>
  )
}
