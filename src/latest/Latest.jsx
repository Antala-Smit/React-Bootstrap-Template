import React from 'react'
import './Latest.css'

function Latest() {
    return (
        <div>
            <section className='latest'>
                <div className="container">
                    <div className="row">
                        <div className="title text-center mb-5">
                            <h2>Latest News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>
                        <div className="latest-box d-flex">
                            <div className="col-4 latest-box1">
                                <div className="latest-text">
                                    <span>By Admin | <a href="#">Snacks</a> </span>
                                    <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/2 (4).jpg" alt="" />
                                    <div className="latest-img-text">
                                        <span>10</span>
                                        <p>oct</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 latest-box2">
                                <div className="latest-text">
                                    <span>By Admin | <a href="#">Food</a> </span>
                                    <h5>Best guide to pretium Shopping for organic ingredients.</h5>
                                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/1 (4).jpg" alt="" />
                                    <div className="latest-img-text">
                                        <span>10</span>
                                        <p>oct</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 latest-box3">
                                <div className="latest-text">
                                    <span>By Admin | <a href="#">Snacks</a> </span>
                                    <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                    <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/3 (4).jpg" alt="" />
                                    <div className="latest-img-text">
                                        <span>10</span>
                                        <p>oct</p>
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

export default Latest
