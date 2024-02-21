import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Charada from '../../assets/charada.jpg'
import Footer from '../../components/footer';

function Contato(){
    return(
        <>
            <Header />
            <div className='contato-container'>
                <div className='contato-content'>
                    <img src={Charada} className='charada'/>
                    <p className='contato'>
                        Nosso Contato: <br/>
                            Telefone: 223534343212 <br/>
                            Email: xxxxxxx@gmail.com
                    </p>
                </div>  
            </div>
            <Footer />
        </>
    )
}

export default Contato;