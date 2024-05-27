import React from 'react'
import './Deal.css'

function Deal() {
    return (
        <div>
            <div className="deal">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="banner-text">
                                <h5><span>35%</span>OFF</h5>
                                <h4 className='col-8'>Great deal on organic food.</h4>
                                <p className='col-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                                <div className="timer">
                                    <div className="time-section">
                                        <div className="value" id="days">10</div>
                                        <div className="label">Days</div>
                                    </div>
                                    <p>:</p>
                                    <div className="time-section">
                                        <div className="value" id="hours"> 08</div>
                                        <div className="label">Hrs</div>
                                    </div>
                                    <p>:</p>
                                    <div className="time-section">
                                        <div className="value" id="minutes">45</div>
                                        <div className="label">Min</div>
                                    </div>
                                    <p>:</p>
                                    <div className="time-section">
                                        <div className="value" id="seconds">30</div>
                                        <div className="label">Sec</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='best-deal'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-box deal2 d-xl-flex ">
                                <div className="col-12 d-flex" style={{alignItems:"center"}}>
                                    <div className="box-1 col-4 m-3" >
                                        <div className="box">
                                            <a href="#"><img src="src/img/1 (1).jpg" /></a>
                                        </div>

                                        <div className="text-box">
                                            <a href="#"><span>Vegetables</span><br></br>
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                                <span>(4.5)</span>
                                                <h3>Fresh organic villa farm lomon 500gm pack</h3>
                                                <p>$120.25<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box-1 col-4 m-3">
                                        <div className="box ">
                                            <div className="box">
                                                <a href="#"><img src="src/img/9 (1).jpg" /></a>
                                            </div>
                                            <div className="text-box">
                                                <a href="#"><span>Snacks</span><br></br>
                                                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                    <span>(5.0)</span>
                                                    <h3>Best snakes with hazel nut pack 200gm</h3>
                                                    <p>$145<span>$150</span></p>
                                                </a>
                                                <div className="icon1">
                                                    <a href="#">
                                                        <p><i className="fa-regular fa-eye" /></p>
                                                        <i className="fa-regular fa-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box-1 col-4 m-3">
                                        <div className="box">
                                            <a href="#"><img src="src/img/2 (1).jpg" /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#"><span>Fruits</span><br></br>
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                                <span>(4.5)</span>
                                                <h3>Best Fresh organic apple 1kg simla marming</h3>
                                                <p>$120.25<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="main-img">
                                            <div className="deal3">
                                                <h4>Organic & Healthy
                                                    <br />Vegitables
                                                </h4>
                                                <p>25% <span>OFF</span></p>
                                                <a href="#"><button>Shop Now</button></a>
                                            </div>
                                        </div>
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

export default Deal
