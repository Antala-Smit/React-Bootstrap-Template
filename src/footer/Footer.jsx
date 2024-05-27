import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="footer-logo">
                <img src="src/img/logo.png" alt="" />
                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
              </div>
              <div className="footer-text">
                <div className="contact d-flex">
                  <i className="fa-solid fa-location-dot d-flex"></i>
                  <p> 51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                </div>
                <div className="contact d-flex">
                  <i className="fa-solid fa-envelope"></i>
                  <p><a href="#">example@email.com</a></p>
                </div>
                <div className="contact d-flex">
                  <i className="fa-solid fa-phone"></i>
                  <p><a href="#"> +91 123 4567890</a></p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="company">
                <div className="title">
                  <h4>Company</h4>
                </div>
                <div className="title-text">
                  <a href="#">
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>Support Center</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="company">
                <div className="title">
                  <h4>Category</h4>
                </div>
                <div className="title-text">
                  <a href="#">
                    <p>Dairy & Bakery</p>
                    <p>Fruits & Vegetable</p>
                    <p>Snack & Spice</p>
                    <p>Juice & Drinks</p>
                    <p>Chicken & Meat</p>
                    <p>Fast Food</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="subscribe">
                <div className="title">
                  <h4>Subscribe Our Newsletter</h4>
                </div>
                <div className="find">
                  <input className='search-input find-input' type="text" placeholder='Search here...' />
                  <a href="#"><i class="fa-brands fa-telegram"></i></a>
                </div>
              </div>
              <div className="icon">
                <a href="#">
                  <span><i class="fa-brands fa-facebook"></i></span>
                  <span><i class="fa-brands fa-x-twitter"></i></span>
                  <span><i class="fa-brands fa-dribbble"></i></span>
                  <span><i class="fa-brands fa-instagram"></i></span>
                </a>
              </div>
              <div className="icon-img d-flex">
                <a href="#">
                  <img src="src/img/1 (5).jpg" alt="" />
                </a>
                <a href="#">
                  <img src="src/img/2 (5).jpg" alt="" />
                </a>
                <a href="#">
                  <img src="src/img/3 (5).jpg" alt="" />
                </a>
                <a href="#">
                  <img src="src/img/4 (1).jpg" alt="" />
                </a>
                <a href="#">
                  <img src="src/img/5 (1).jpg" alt="" />
                </a>
              </div>
            </div>

            <div className="footer-last">
                <p>© 2024 <a href="#">Carrot</a>, All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
