import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'

function  Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="RolfGutix Logo"/>
            </a>
            {/* 
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink> */}

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu; //beleza 