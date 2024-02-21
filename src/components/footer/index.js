import React from 'react'
import './styles.css'
import Logo from '../../assets/Symbol.png'

function Footer(){
    return (
        <>
            <footer>
                <img src={Logo} />
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por: Rafael Silveira</span>
            </footer>
        </>
    )

    
}

export default Footer;