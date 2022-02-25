import React from 'react'
import logo from '../../flairMedicalLogo.svg'

const Header = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><a href='/price_list'>Price List</a></li>
                <li>
                    <img src={logo} alt='logo' />
                </li>
                <li><a href='/enquire'>Enquire</a></li>
            </ul>


        </div>
    )
}

export default Header;