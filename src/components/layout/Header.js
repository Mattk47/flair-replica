import React from 'react'
import logo from '../../images/flairMedicalLogo.svg'

const Header = () => {
    return (
        <div className='navbar center'>
            <ul>
                <li className='inline'><a className='m' href='/price_list'>PRICE LIST</a></li>
                <li className='inline'>
                    <a href='/'>
                        <img src={logo} alt='logo' />
                    </a>
                </li>
                <li className='inline'><a className='m' href='/enquire'>ENQUIRE</a></li>
            </ul>


        </div>
    )
}

export default Header;