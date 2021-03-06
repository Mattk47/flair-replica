import React from 'react'

const PriceList = () => {
    return (
        <div>
            <section id="cyanSection" className="titleHeight" >
                <div className='priceTitle'>
                    <h1 className='plist'>Price List</h1>
                    <h4 className='mleft'>Our full menu of luxurious body care
                    </h4>
                </div>
            </section>
            <section>
                <div className='tertiary'>
                    <div className='price-padding'>
                        <h2>Dermal Fillers</h2>
                        <ul >
                            <li className='price-item'>0.5ml <span>from £80</span></li>
                            <li className='price-item'>0.7ml <span>from £100</span></li>
                            <li className='price-item'>1.1ml <span>from £120</span></li>
                            <li className='price-item'>2ml <span>from £200</span></li>
                        </ul>
                    </div>
                    <div className='price-padding' >
                        <h2 >Areas Available</h2>
                        <ul >
                            <li className='price-item'>Jaw Contouring 1ml/2ml <span>£150/£250</span></li>
                            <li className='price-item'>Cheek Augmentation 1ml/2ml <span>£150/£250</span></li>
                            <li className='price-item'>Tear Trough with Cannula <span>£170</span></li>
                            <li className='price-item'>Non-Surgical Rhinoplasty <span>£150</span></li>
                            <li className='price-item'>Chin Augmentation <span>£150</span></li>
                        </ul>
                    </div>
                    <div className='price-padding'>
                        <h2>Facial Treatments</h2>
                        <ul>
                            <li className='price-item'>Dermaplaning <span>£30</span></li>
                            <li className='price-item'>with Anti-Age Collagen Mask <span>£40</span></li>
                            <li className='price-item'>Dermarolling with MESO Treatment <span>£40</span></li>
                            <li className='price-item'>Microneedling with MESO Treatment <span>£40</span></li>
                            <li className='price-item'>Vampire Facial (platelet rich plasma) <span>£100</span></li>
                        </ul>
                    </div>
                    <div className='price-padding'>
                        <h2>Other Treatments</h2>
                        <ul>
                            <li className='price-item'>Microblading Brows* (inc top up) <span>£75</span></li>
                            <li className='price-item'>Aqualyx Fat Dissolving Injections (per area) <span>£40</span></li>
                            <li className='price-item'>B12 <span>£40</span></li>
                            <li className='price-item'>Dermal Filler Dissolving <span>from £25</span></li>
                            <li className='price-item'>IV Nutrition Therapy <span>from £50</span></li>
                            <li className='price-item'>Skin Tag Removal <span>from £80</span></li>
                            <li className='price-item'>Correction Work** <span>consultation required
                            </span></li>
                            <li className='price-item'>Ear syringing and examination <span>consultation required
                            </span></li>
                        </ul>
                    </div>
                    <div className='price-padding'>
                        <h2>Anti Wrinkle Treatment</h2>
                        <ul>
                            <li className='price-item'>Profhilo 10 Point Face Lift (per 2ml) <span>£240</span></li>
                            <li className='price-item'>Anti Wrinkle consultation <span>consultation required
                            </span></li>
                        </ul>
                    </div>
                    <div className='price-padding'>
                        <h2>Beauty</h2>
                        <ul>
                            <li className='price-item'>Spray Tan <span>£20</span></li>
                            <li className='price-item'>Eyebrow Wax and Tint <span>£10
                            </span></li>
                        </ul>
                    </div>
                </div>
                <div className='center btn-margin'>
                    <a href='/enquire'>
                        <button className='button primary '>ENQUIRE NOW</button>
                    </a>
                </div>
                <p className='tertiary'>**Consultations available for problematic areas</p>
            </section>
        </div>
    )
}

export default PriceList