import React from 'react';
//link responsavel pela aplicação Single responsibility Application
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index'

function  Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="RolfGutix Logo"/>
            </Link>
            {/* 
            <ButtonLink className="ButtonLink" to="/">
                Novo Vídeo
            </ButtonLink> */}

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu; //beleza 