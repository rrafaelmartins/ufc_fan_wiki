import { useState } from 'react';
import ufc_logo from './assets/ufc_logo.png'

function Header(){

    return(
        <header>
            <img className='App-logo' src={ufc_logo} alt="UFC Logo" />
            <h1>FAN WIKI</h1>
        </header>
    )

}

export default Header;