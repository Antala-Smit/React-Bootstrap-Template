import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <section className='contact'>
                <div className="container">
                    <div className="row">
                        <div className="contact-box d-flex">
                            <div className="col-3">
                                <div className="contact-box1">
                                    <div className="contact-img">
                                        <i class="fa-solid fa-boxes-packing fa-bounce"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Product Packing</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="contact-box2">
                                    <div className="contact-img">
                                        <i class="fa-solid fa-headset fa-bounce"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>24X7 Support</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="contact-box3">
                                    <div className="contact-img">
                                        <i class="fa-solid fa-truck-fast fa-bounce"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Delivery in 5 Days</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="contact-box4">
                                    <div className="contact-img">
                                        <i class="fa-solid fa-money-check-dollar fa-bounce"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Payment Secure</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
