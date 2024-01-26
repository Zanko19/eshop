import React from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationArrow, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Header (){
     return (
<div className="top-0">
<div className="absolute right-0"><DarkThemeToggle /></div>
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
            <div className="right-phone-box hidden md:flex flex-col-1">
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
          <div className="">
            <div className="login-box flex">
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
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT80
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> Off 50%! Shop Now
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> Off 10%! Shop Vegetables
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> 50% - 80% off on Vegetables
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT30
      </li>
      <li className="carouselTicker__item">
        <i className="fab fa-opencart"></i> Off 50%! Shop Now
      </li>
    </ul>
  </div>
</div>
<div className='absolute bottom-0 right-0' id="back-to-top"><a></a></div>
          </div>
        </div>
      </div>
    </div>
     );
}
   
export default Header;
 