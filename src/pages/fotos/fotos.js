import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer';

function Fotos(){
    return(
        <>
            <Header />
            <div className='fotos-container'>
                <div className='fotos-content'>
                    <img className='fotos' src={'https://img.ibxk.com.br/2022/03/02/02155003122495.jpg'}/>
                    <img className='fotos' src={'https://ovicio.com.br/wp-content/uploads/2022/02/20220208-ovicio-batman-detetive-4k-filme.jpg'}/>
                    <img className='fotos' src={'https://beforesandafters.com/wp-content/uploads/2022/05/The-Making-Of-The-Batman-_-The-Batman-_-HBO-Max-1-48-screenshot.jpg'}/>
                    <img className='fotos' src={'https://i.insider.com/5e47186696eee617452b7c33?width=700'}/>
                    <img className='fotos' src={'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/04123612/EZWqtbbXgAEaxSC.jpg'}/>
                    <img className='fotos' src={'https://assets.papelpop.com/wp-content/uploads/2020/04/essa.jpg'}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Fotos;