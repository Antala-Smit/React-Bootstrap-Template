import React from 'react'
import './People.css'

function People() {
    return (
        <div>
            <section className='people'>
                <div className="container">
                    <div className="row">
                        <div className="title text-center mb-5">
                            <h2>Great Words From People</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>
                        <div className="team d-flex">
                            <div className="col-4 p-3">
                                <div className="team1">
                                    <div className="team-img">
                                        <img src="src/img/1 (3).jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <span>Co Founder</span>
                                        <h4>Stephen Smith</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3">
                                <div className="team1">
                                    <div className="team-img">
                                        <img src="src/img/2 (3).jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <span>Manager</span>
                                        <h4>Lorem Robinson</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3">
                                <div className="team1">
                                    <div className="team-img">
                                        <img src="src/img/3 (3).jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <span>Team Leader</span>
                                        <h4>Saddika Alard</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
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

export default People
