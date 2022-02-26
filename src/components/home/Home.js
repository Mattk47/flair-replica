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
    const screenWidth = window.innerWidth
    return (
        <div>
            <section id='section-1' className='horizontalCenter'>
                <div class='block1 text-center'>
                    <div >
                        <h1>Enhance your <br />natural beauty.</h1>
                        <h3 className='subHeader'>Be the best kind of you with Flair Aesthetics.</h3>

                    </div>
                    <div className='btn-pair center-btn'>
                        <button className='button primary'>ENQUIRE NOW</button>
                        <button className='button secondary'>SEE PRICE LIST</button>

                    </div>
                </div>
                <div>
                </div>
            </section>
            <section >
                <div>
                    <p>At Flair Medical Aesthetics, we combine the most luxurious beauty care with years of experience, allowing you to be the best kind of you.</p>
                </div>
                <div>
                    <p className='coral'>Start doubling your beauty and feel the true difference.</p>
                </div>
                <div className='center'>
                    <button className='button primary'>ENQUIRE NOW</button>
                </div>
            </section>
            <section id='section-3'>
                <div className='block2'>
                    <div className='centerPic'>
                        <img className='mirror' src={mirror} alt='about' />

                    </div>
                    <div>
                        <h2>About flair</h2>
                        <p>Flair Medical Aesthetics is owned by Claire Daly, Registered Nurse BSc. Qualifying over 18 years ago. My background is in Emergency Care ( Accident & Emergency). I am a qualified Emergency Nurse practitioner (ENP) with a prescribing qualification.</p>
                        <p>I am currently working in a GP practice as a Nurse team manager. I also teach Basic Life Support in both adult and paediatrics. I started Aesthetics 3 years ago, and it has become my passion. I love making people feel good about themselves. I am trained in advanced Aesthetics.</p>
                        <p>I continually update my skill set, which allows me to be up to date with the most recent evidence-based research. I am professional, discreet and trustworthy and I look forward to meeting you and helping you to be the best kind of you.</p>
                        <div className='center'>
                            <a href='/enquire'>
                                <button className='button primary'>ENQUIRE NOW</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className='block2'>
                    <div>
                        <h2>Dermal Fillers</h2>
                        <p>Look after your face with our luxury injectables. Our clinic offers face and lip fillers to bring out the best in you.</p>
                        <div className='center'>
                            <a href='/enquire'>
                                <button className='button primary btn-margin'>ENQUIRE NOW</button>
                            </a>

                        </div>
                    </div>
                    <div className='center'>
                        <img className='image' src={lipfillers} alt='lipfillers' />
                    </div>
                </div>
            </section>
            <section>
                <div className='block2'>
                    <div className='center'>
                        <img className='image' src={facial} alt='facial' />
                    </div>
                    <div >
                        <h2>Facial Treatments</h2>
                        <p>Relax in a world of facial paradise with our specialist beautifying skin treatments to cleanse and moisturise like never before.
                        </p>
                        <div className='center'>
                            <a href='/enquire'>
                                <button className='button primary btn-margin'>ENQUIRE NOW</button>
                            </a>

                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div>
                    <div className='block2'>
                        <div>
                            <h2>Personal Care</h2>
                            <p>We look after your entire body with our list of personal care treatments. From eyebrows to IV therapy, feel your absolute best from Flair.</p>
                            <div className='center'>
                                <a href='/enquire'  >
                                    <button className='button primary'>ENQUIRE NOW</button>
                                </a>
                            </div>
                        </div>
                        <div className='center'>
                            <img className='image' src={personalCare} alt='personal care' />
                        </div>
                    </div>
                </div>
            </section>
            <SlickSlider />
            <section>
                <div>
                    <div className='pics marginTop center'>
                        <div><img className='pic' src={im1} alt='Home Content' /></div>
                        <div><img className='pic' src={im2} alt='Home Content' /></div>
                        <div><img className='pic' src={im3} alt='Home Content' /></div>
                        <div><img className='pic' src={im4} alt='Home Content' /></div>
                        <div><img className='pic' src={im5} alt='Home Content' /></div>
                        <div><img className='pic' src={im6} alt='Home Content' /></div>
                        <div><img className='pic' src={im7} alt='Home Content' /></div>
                        <div><img className='pic' src={im8} alt='Home Content' /></div>






                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home