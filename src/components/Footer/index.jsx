import React from 'react'
import './styles.scss'
import {
    LinkedinLogo,
    GithubLogo,
    GitBranch
    } from '@phosphor-icons/react'

export default function Footer() {
    return(
        <footer>
            <div className="footerContainer">
                <div className="aboutmeContainer">
                    <h3>
                        Sobre Mim
                    </h3>
                    <p>
                        Aluno de <b>Análise e Desenvolvimento de Sistemas pela Faci Wyden.</b><br/>
                        Após alguns anos trabalhando como designer gráfico,
                        decidi seguir a carreira que almejo como programador.
                        Busco uma oportunidade de estágio ou desenvolvedor júnior,
                        disposto a aprender e contribuir.
                    </p>
                </div>
                <div className="linksContainer">
                    <h3>
                        Links
                    </h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/rodrigoo-nscmt/">
                            <LinkedinLogo size={25} weight="fill" /> Linkedin
                        </a></li>
                        <li><a href="https://github.com/ReFNN">
                        <   GithubLogo size={25} weight="fill" /> ReFNN
                        </a></li>
                        <li><a href="https://github.com/ReFNN/RoyalShoes-React">
                            <GitBranch size={28} weight="fill" /> Repositório
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="copyrightContainer">
                <a href="https://github.com/ReFNN/">© 2023 Copyright Royal Shoes</a>
            </div>
        </footer>
    )
}