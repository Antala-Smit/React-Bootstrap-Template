import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product() {
    return (
        <div>
            {/* Products */}
            <section className='product'>
                <div className='container'>
                    <div className="row">
                        <div className="title text-center mb-5">
                            <h2>Popular Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>

                        <div className="main-box d-xl-flex ">
                            <div className="box-1 col-3">
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

                            <div className="box-1 col-3">
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

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/2 (1).jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Fruits</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                        <span>(4.5)</span>
                                        <h3>Fresh organic apple 1kg simla marming</h3>
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

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/17.jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Bakery</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                        <span>(5.0)</span>
                                        <h3>Delicious white baked fresh bread and toast</h3>
                                        <p>$20<span>$22.10</span></p>
                                    </a>
                                    <div className="icon1">
                                        <a href="#">
                                            <p><i className="fa-regular fa-eye" /></p>
                                            <i className="fa-regular fa-heart" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/11.jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Snacks</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                        <span>(5.0)</span>
                                        <h3>Sweet crunchy nut mix 250gm pack</h3>
                                        <p>$120<span>$123.25</span></p>
                                    </a>
                                    <div className="icon1">
                                        <a href="#">
                                            <p><i className="fa-regular fa-eye" /></p>
                                            <i className="fa-regular fa-heart" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/3 (1).jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Fruits</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" />
                                        <span>(3.2)</span>
                                        <h3>Organic fresh venila farm watermelon 5kg</h3>
                                        <p>$50.30<span>$72.60</span></p>
                                    </a>
                                    <div className="icon1">
                                        <a href="#">
                                            <p><i className="fa-regular fa-eye" /></p>
                                            <i className="fa-regular fa-heart" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/10 (1).jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Snacks</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                        <span>(5.0)</span>
                                        <h3>Delicious white baked fresh bread and toast</h3>
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

                            <div className="box-1 col-3">
                                <div className="box">
                                    <a href="#"><img src="src/img/17.jpg" /></a>
                                </div>
                                <div className="text-box">
                                    <a href="#"><span>Bakery</span><br></br>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                        <span>(5.0)</span>
                                        <h3>Delicious white baked fresh bread and toast</h3>
                                        <p>$20<span>$22.10</span></p>
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
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Product
