import React from 'react'
import mirror from '../../images/mirror.jpg'
import facial from '../../images/facial.jpg'
import lipfillers from '../../images/lipfillers.jpg'
import personalCare from '../../images/personalCare.jpg'
import SlickSlider from './SlickSlider'
import im1 from '../../images/im1.png'
import im2 from '../../images/im2.png'
import im3 from '../../images/im3.png'
import im4 from '../../images/im4.png'
import im5 from '../../images/im5.png'
import im6 from '../../images/im6.png'
import im7 from '../../images/im7.png'
import im8 from '../../images/im8.png'
const Home = () => {
    return (
        <div>
            <section>
                <h1>Enhance your natural beauty</h1>
                <h3>Be the best kind of you with Flair Aesthetics.</h3>
                <button>ENQUIRE NOW</button>
                <button>SEE PRICE LIST</button>
            </section>
            <section>
                <div>
                    <p>At Flair Medical Aesthetics, we combine the most luxurious beauty care with years of experience, allowing you to be the best kind of you.</p>
                </div>
                <div>
                    <p>Start doubling your beauty and feel the true difference.</p>
                </div>
                <button>ENQUIRE NOW</button>
            </section>
            <section>
                <div>
                    <img src={mirror} alt='about' />
                </div>
                <div>
                    <h2>About flair</h2>
                    <p>Flair Medical Aesthetics is owned by Claire Daly, Registered Nurse BSc. Qualifying over 18 years ago. My background is in Emergency Care ( Accident & Emergency). I am a qualified Emergency Nurse practitioner (ENP) with a prescribing qualification.</p>
                    <p>I am currently working in a GP practice as a Nurse team manager. I also teach Basic Life Support in both adult and paediatrics. I started Aesthetics 3 years ago, and it has become my passion. I love making people feel good about themselves. I am trained in advanced Aesthetics.</p>
                    <p>I continually update my skill set, which allows me to be up to date with the most recent evidence-based research. I am professional, discreet and trustworthy and I look forward to meeting you and helping you to be the best kind of you.</p>
                    <a href='/enquire'>
                        <button>ENQUIRE NOW</button>
                    </a>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h2>Dermal Fillers</h2>
                        <p>Look after your face with our luxury injectables. Our clinic offers face and lip fillers to bring out the best in you.</p>
                        <a href='/enquire'>
                            <button>ENQUIRE NOW</button>
                        </a>
                    </div>
                    <div>
                        <img src={lipfillers} alt='lipfillers' />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <h2>Facial Treatments</h2>
                        <p>Relax in a world of facial paradise with our specialist beautifying skin treatments to cleanse and moisturise like never before.
                        </p>
                        <a href='/enquire'>
                            <button>ENQUIRE NOW</button>
                        </a>
                    </div>
                    <div>
                        <img src={facial} alt='facial' />
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <div>
                            <h2>Personal Care</h2>
                            <p>We look after your entire body with our list of personal care treatments. From eyebrows to IV therapy, feel your absolute best from Flair.</p>
                            <a href='/enquire'>
                                <button>ENQUIRE NOW</button>
                            </a>
                        </div>
                        <div>
                            <img src={personalCare} alt='personal care' />
                        </div>
                    </div>
                </div>
            </section>
            <SlickSlider />
            <section>
                <div>
                    <div>
                        <div><img src={im1} alt='Home Content' /></div>
                        <div><img src={im2} alt='Home Content' /></div>
                        <div><img src={im3} alt='Home Content' /></div>
                        <div><img src={im4} alt='Home Content' /></div>
                        <div><img src={im5} alt='Home Content' /></div>
                        <div><img src={im6} alt='Home Content' /></div>
                        <div><img src={im7} alt='Home Content' /></div>
                        <div><img src={im8} alt='Home Content' /></div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home