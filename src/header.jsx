import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationArrow, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Header (){
     return (
<div className="top-0">
<div className='absolute top-0 right-0'><DarkThemeToggle /></div>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="custom-select-box hidden md:flex">
              <select
                id="basic"
                className="selectpicker show-tick form-control"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className="right-phone-box hidden">
              <p>
                Call US :- <a href="#"> +11 900 800 100</a>
              </p>
            </div>
            <div className="our-link">
              <ul>
              <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} className="s_color" /> My Account
                  </a>
                </li>
                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faLocationArrow} className="s_color" /> Our location
                   
                  </a>
                </li>
                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faHeadset} className="s_color" /> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="login-box">
              <select
                id="basic"
                className="selectpicker show-tick form-control"
                data-placeholder="Sign In"
              >
                <option>Register Here</option>
                <option>Sign In</option>
              </select>
            </div>
            <div className="text-slid-box hidden md:flex">
              <div id="offer-box" className="carouselTicker">
                <ul className="offer-box">
                  <li>
                    <i className="fab fa-opencart"></i> 20% off Entire Purchase
                    Promo code: offT80
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 50% - 80% off on
                    Vegetables
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 50% - 80% off on
                    Vegetables
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 20% off Entire Purchase
                    Promo code: offT30
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
   
export default Header;
 