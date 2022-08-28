import React from 'react';

import { useFormik } from 'formik';

import scrollUp from './scroll-up.svg'

import './contact.scss';
import { Link } from 'react-scroll';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Full name is required'
    } else if (values.name.length < 4) {
        errors.name = 'At lest 4 symbols'
    }

    if (!values.company) {
        errors.company = 'Full company name is required'
    } else if (values.company.length < 4) {
        errors.company = 'At lest 4 symbols'
    }

    if (!values.messages) {
        errors.messages = 'Please write to us your message'
    } else if (values.messages.length < 10) {
        errors.messages = 'At lest 10 symbols'
    }

    if (!values.mail) {
        errors.mail = 'Required Field'
    } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9,_]+\.[A-Z]{2,}/i.test(values.mail)) {
        errors.mail = 'Wrong E-mail'
    }
   
    if (!values.phone) {
        errors.phone = 'Required Field'
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)) {
        errors.phone = 'Wrong phone number'
    }

    return errors
}

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            phone: '',
            mail: '',
            messages: ''
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })
    
    return (
        <section id='CUS' className='contact'>
          <div className="container">
            <div className="contact-wrapper">
                <div className="contact-wrapper_title">
                        CONTACT <span>US</span>
                </div> 
                
                <div className="contact-wrapper_scrollUp">
                    <Link to={'HEAD'} smooth={true} duration={500} spy={true}>
                        <img src={scrollUp} alt="go-up" className='fixedArrow'/>
                    </Link>
                </div>

                {/* <div className="scroll-arrow header-content_descr">
                    <Link to={'CUS'} smooth={true} duration={500} offset={80} spy={true} className='header-content_scroll'>
                        <img src={arrow} alt="" />
                    </Link>
                </div> */}
            </div>


            <form className='contact-us form__group field' onSubmit={formik.handleSubmit}>
                <label 
                    htmlFor="name" 
                    className={formik.errors.name && formik.touched.name ? "form__label-error" : "form__label"}
                >
                    Full Name
                </label>
                <input 
                    type="text" 
                    className={formik.errors.name && formik.touched.name ? "form__field-error" : "form__field"} 
                    name="name" 
                    id='name' 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? <div className='formik__error'>{formik.errors.name}</div> : null}

                <label 
                    htmlFor="company" 
                    className={formik.errors.company && formik.touched.company ? "form__label-error" : "form__label"}
                    >
                        Company Name
                </label>
                <input 
                    type="text" 
                    className={formik.errors.company && formik.touched.company ? "form__field-error" : "form__field"}
                    name="company" 
                    id='company'
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                 {formik.errors.company && formik.touched.company ? <div className='formik__error'>{formik.errors.company}</div> : null}
                
                <label 
                    htmlFor="phone" 
                    className={formik.errors.phone && formik.touched.phone ? "form__label-error" : "form__label"}
                    >
                        Phone number
                </label>
                <input 
                    type={'number'} 
                    className={formik.errors.phone && formik.touched.phone ? "form__field-error" : "form__field"} 
                    name="phone" 
                    id='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                 {formik.errors.phone && formik.touched.phone ? <div className='formik__error'>{formik.errors.phone}</div> : null}

                <label 
                    htmlFor="mail" 
                    className={formik.errors.mail && formik.touched.mail ? "form__label-error" : "form__label"}
                    >
                        E-mail
                </label>
                <input 
                    type="text" 
                    className={formik.errors.mail && formik.touched.mail ? "form__field-error" : "form__field"} 
                    name="mail" 
                    id='mail' 
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.mail && formik.touched.mail ? <div className='formik__error'>{formik.errors.mail}</div> : null}
                
                <label 
                    htmlFor="messages" 
                    className={formik.errors.messages && formik.touched.messages ? "form__label-error" : "form__label"}
                    >
                        Write Us Messages
                </label>
                <textarea 
                    type="text" 
                    className={formik.errors.messages && formik.touched.messages ? "form__field-error" : "form__field"} 
                    name="messages" 
                    id='messages' 
                    value={formik.values.messages}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.messages && formik.touched.messages ? <div className='formik__error'>{formik.errors.messages}</div> : null}

                <input className='form__btn' type="submit" value='Send Message' />
            </form>
          </div>
        </section>
    );
};

export default Contact;