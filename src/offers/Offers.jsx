import React from 'react'
import './Offers.css'

function Offers() {
    return (
        <div>
            <section className='offer'>
                <div className="container">
                    <div className="row">
                        <div className="box d-flex">
                            <div className="col-4">
                                <div className="box1">
                                    <h5>Fresh <br />
                                        Snacks & Sweets
                                    </h5>
                                    <p><span>20% </span>Off on first oreder</p>
                                    <a href="#"><button>Shop Now</button></a>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="box2">
                                    <h5>Fresh & Healthy<br />
                                        Organic Fruits
                                    </h5>
                                    <p><span>35% </span>Off on first oreder</p>
                                    <a href="#"><button>Shop Now</button></a>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="box3">
                                    <h5>Healthy<br />
                                        Bakery Products
                                    </h5>
                                    <p><span>30% </span>Off on first oreder</p>
                                    <a href="#"><button>Shop Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Offers
