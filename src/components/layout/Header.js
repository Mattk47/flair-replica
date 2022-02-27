import React from 'react'
import logo from '../../images/flairMedicalLogo.svg'

const Header = () => {
    return (
        <div className='navbar'>
            <ul>
                <li className="formatNavLink "><a href='/price_list'>PRICE LIST</a></li>
                <li>
                    <a href='/' >
                        <img src={logo} alt='logo' />
                    </a>
                </li>
                <li className="formatNavLink"><a href='/enquire'>ENQUIRE</a></li>
            </ul>


        </div>
    )
}

export default Header;