import React from 'react'

const PriceList = () => {
    return (
        <div>
            <section id="section-3" >
                <div className='priceTitle'>
                    <h1>Price List</h1>
                    <h4>Our full menu of luxurious body care
                    </h4>
                </div>
            </section>
            <section>
                <div className='tertiary'>
                    <div>
                        <h2>Dermal Fillers</h2>
                        <ul className=''>
                            <li>0.5ml <span>from £80</span></li>
                            <li>0.7ml <span>from £100</span></li>
                            <li>1.1ml <span>from £120</span></li>
                            <li>2ml <span>from £200</span></li>
                        </ul>
                    </div>
                    <div>
                        <h2 >Areas Available</h2>
                        <ul>
                            <li>Jaw Contouring 1ml/2ml <span>£150/£250</span></li>
                            <li>Cheek Augmentation 1ml/2ml <span>£150/£250</span></li>
                            <li>Tear Trough with Cannula <span>£170</span></li>
                            <li>Non-Surgical Rhinoplasty <span>£150</span></li>
                            <li>Chin Augmentation <span>£150</span></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Facial Treatments</h2>
                        <ul>
                            <li>Dermaplaning <span>£30</span></li>
                            <li>with Anti-Age Collagen Mask <span>£40</span></li>
                            <li>Dermarolling with MESO Treatment <span>£40</span></li>
                            <li>Microneedling with MESO Treatment <span>£40</span></li>
                            <li>Vampire Facial (platelet rich plasma) <span>£100</span></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Other Treatments</h2>
                        <ul>
                            <li>Microblading Brows* (inc top up) <span>£75</span></li>
                            <li>Aqualyx Fat Dissolving Injections (per area) <span>£40</span></li>
                            <li>B12 <span>£40</span></li>
                            <li>Dermal Filler Dissolving <span>from £25</span></li>
                            <li>IV Nutrition Therapy <span>from £50</span></li>
                            <li>Skin Tag Removal <span>from £80</span></li>
                            <li>Correction Work** <span>consultation required
                            </span></li>
                            <li>Ear syringing and examination <span>consultation required
                            </span></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Anti Wrinkle Treatment</h2>
                        <ul>
                            <li>Profhilo 10 Point Face Lift (per 2ml) <span>£240</span></li>
                            <li>Anti Wrinkle consultation <span>consultation required
                            </span></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Beauty</h2>
                        <ul>
                            <li>Spray Tan <span>£20</span></li>
                            <li>Eyebrow Wax and Tint <span>£10
                            </span></li>
                        </ul>
                    </div>
                </div>
                <button className='button primary'>ENQUIRE NOW</button>
            </section>
        </div>
    )
}

export default PriceList