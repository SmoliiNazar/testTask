import React from 'react';

import scrollUp from './scroll-up.svg'

import './contact.scss';

const Contact = () => {
    return (
        <section id='CUS' className='contact'>
          <div className="container">
            <div className="contact-wrapper">
                <div className="contact-wrapper_title">
                        CONTACT <span>US</span>
                </div> 
                <a href='#' className="contact-wrapper_scrollUp">
                    <img src={scrollUp} alt="go-up"/>
                </a>
            </div>


            <form className='contact-us form__group field'>
                <label for="name" className="form__label">Name</label>
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />

                <label for="company" className="form__label">Company Name</label>
                <input type="input" className="form__field" placeholder="Company Name" name="company" id='company' required />

                <label for="phone" className="form__label">Phone number</label>
                <input type="input" className="form__field" placeholder="Phone number" name="phone" id='phone' required />

                <label for="mail" className="form__label">E-mail</label>
                <input type="input" className="form__field" placeholder="Your E-mail" name="E-mail" id='mail' required />

                <label for="messages" className="form__label">Write Us Messages</label>
                <textarea type="input" className="form__field" placeholder="Your Message" name="messages" id='messages' required />
            
                <input className='form__btn' type="submit" value='Send Message' />
            </form>
          </div>
        </section>
    );
};

export default Contact;