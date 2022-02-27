import React from 'react'

const Footer = () => {
    return (
        <section id="section-3" className='footer'>
            <div className='footer-element'>
                <h3 className='h'>Flair</h3>
                <ul>
                    <li><a href='price_list'>Price List</a></li>
                    <li><a href='enquire'>   Enquire Now</a></li>
                </ul>
            </div>
            <div className='footer-element'>
                <h3 className='h'>Legal</h3>
                <ul>
                    <li className='listPadding'>Terms and Conditons</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className='footer-element'>
                <h3 className='h'>Help</h3>
                <ul >
                    <li className='h'>Contact</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer