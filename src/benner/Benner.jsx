import React from 'react'
import './Benner.css'

function Benner() {
    return (
        <div className='main'>
            {/* banner */}
            <div className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-6">
                            <div className="banner-text">
                                <h5><span>100%</span>Organic Fruits</h5>
                                <h1 className='col-8'>Explore fresh & juicy fruits.</h1>
                                <p className='col-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                                <a href="#"><button>Shop Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* items */}
            <div className='items justify-content-center align-item-center'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-4">
                            <div className="item">
                                <ul>
                                    <li><p>Cake & Milk</p><span>(65 items)</span></li>
                                    <li><p>Fresh Meat</p><span>(30 items)</span></li>
                                    <li><p>Vegetables</p><span>(25 items)</span></li>
                                    <li><p>Apple & Mango</p><span>(45 items)</span></li>
                                    <li><p>Strawberry</p><span>(68 items)</span></li>
                                    <li><p>View More</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="i-box">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="i-box1">
                                            <h4 className='d-flex'>50
                                                <span>
                                                    <p> % </p>
                                                    <p>OFF</p>
                                                </span>
                                            </h4>
                                            <div className='i-contain'>
                                                <h5>Cake</h5>
                                                <a href="#"><button>Shop Now</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="i-box2">
                                            <h4 className='d-flex'>40
                                                <span>
                                                    <p> % </p>
                                                    <p>OFF</p>
                                                </span>
                                            </h4>
                                            <div className='i-contain'>
                                                <h5>Milk</h5>
                                                <a href="#"><button>Shop Now</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benner
