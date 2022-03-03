import React from 'react'
import arrow from '../../images/dropdownArrow.svg'

const Enquire = () => {
    return (
        <div>
            <section id='cyanSection' className='titleHeight'>
                <div className='priceTitle '>
                    <h1 className='plist'>Enquire Now</h1>
                    <h4 className='mleft mright'>Fill in the form below to start your journey to doubling your beauty
                    </h4>
                </div>
            </section>
            <section>
                <div className='border'>
                    <form className='form'>
                        <div className='form-segment'>
                            <input type='text' name='full-name' placeholder='Full name' required />

                        </div>
                        <div className='form-segment'>
                            <input type='text' name='email' placeholder='Email address' required />

                        </div>
                        <div className='form-segment'>
                            <input type='text' name='number' placeholder='Phone number' required />

                        </div>
                        <div>
                            <ul className='form-segment dropdown'>
                                <div>
                                    <span className='selectOption'>Select Treatment<img src={arrow} alt='arrow' /></span>
                                </div>
                                <div className='dropdown-content'>
                                    <li className='option-margin'>Dermal Fillers
                                        <ul className='cursorPointer'>
                                            <li>
                                                <input type='radio' name='available-areas' id='dermalFillers' />
                                                <label for='dermalFillers'>0.5ml</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-areas' id='dermalFillers1' />
                                                <label for='dermalFillers1'>0.7ml</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-areas' id='dermalFillers2' />
                                                <label for='dermalFillers2'>1.1ml</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-areas' id='dermalFillers3' />
                                                <label for='dermalFillers3'>2ml</label>
                                            </li>
                                        </ul>


                                    </li>
                                    <li className='option-margin'>Areas Available
                                        <ul>
                                            <li>
                                                <input type='radio' name='areas-available' id='areas-available' />
                                                <label for='areas-available'>Jaw Contouring 1ml/2ml</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='areas-available' id='areas-available1' />
                                                <label for='areas-available1'>Cheek Augmentation 1ml/2ml</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='areas-available' id='areas-available2' />
                                                <label for='areas-available2'>Tear Trough with Cannula</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='areas-available' className='cursorPointer' id='areas-available3' />
                                                <label for='areas-available3'>Non-Surgical Rhinoplasty</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-areas' className='cursorPointer' id='areas-available4' />
                                                <label for='areas-available4'>Chin Augmentation</label>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='option-margin'>Available Treatments
                                        <ul>
                                            <li>
                                                <input type='radio' name='available-treatment' className='cursorPointer' id='available-treatment' />
                                                <label for='available-treatment'>Dermaplanting</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-treatment' className='cursorPointer' id='available-treatment1' />
                                                <label for='available-treatment1'>with Anti-Age Collagen Mask</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-treatment' className='cursorPointer' id='available-treatment2' />
                                                <label for='available-treatment2'>Microneedling Treatment</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='available-treatment' className='cursorPointer' id='available-treatment3' />
                                                <label for='available-treatment3'>Vampire Facial (platelet rich plasma)</label>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className='option-margin'>Other Treatments
                                        <ul>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment' />
                                                <label for='other-treatment'>Microblading Brows* (inc top up)</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment1' />
                                                <label for='other-treatment1'>Aqualyx Fat Dissolving Injections (per area)</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment2' />
                                                <label for='other-treatment2'>B12</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment3' />
                                                <label for='other-treatment3'>Dermal Filler Dissolving</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment4' />
                                                <label for='other-treatment4'>IV Nutrition Therapy</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment5' />
                                                <label for='other-treatment5'>Skin Tag Removal</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment6' />
                                                <label for='other-treatment6'>Correction Work</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='other-treatment' className='cursorPointer' id='other-treatment7' />
                                                <label for='other-treatment7'>Ear syringing and examination</label>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className='option-margin'>Anti Wrinkle Treatment
                                        <ul>
                                            <li>
                                                <input type='radio' name='anti-wrinkle' className='cursorPointer' id='anti-wrinkle' />
                                                <label for='anti-wrinkle'>Profhilo 10 Point Face Lift (per 2ml)</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='anti-wrinkle' className='cursorPointer' id='anti-wrinkle1' />
                                                <label for='anti-wrinkle1'>Anti Wrinkle consultation</label>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className='option-margin'>Beauty
                                        <ul>
                                            <li>
                                                <input type='radio' name='beauty' className='cursorPointer' id='beauty' />
                                                <label for='beauty'>Spray Tan</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='beauty' className='cursorPointer' id='beauty1' />
                                                <label for='beauty1'>Eyebrow Wax and Tint</label>
                                            </li>

                                        </ul>
                                    </li>

                                </div>
                            </ul>

                        </div>
                        <div className='form-segment'>
                            <textArea cols='75' rows='4' placeholder='Enquiry'></textArea>
                        </div>
                        <div className='center margin-bottom'>
                            <button type='submit' value='Login' className='button primary'>Submit </button>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default Enquire
