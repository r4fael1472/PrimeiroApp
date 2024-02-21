import React from 'react'
import './styles.css'

function Button({name, active, onClick}){
    return (
        <div className='ButtonContainer'>
            <button onClick={() => onClick(20)} className = {active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}

export default Button

//props é um objeto, ou seja, pode ser desestruturado

//function Button(name, active){