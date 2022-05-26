import React from 'react';
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebook,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="/">Our Services</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Brand */}
            {/* <div className="footer-col">
              <h4>Brand</h4>
              <ul>
                <li>
                  <a href="/">Whiskey </a>
                </li>
                <li>
                  <a href="/">Gin </a>
                </li>
              </ul>
            </div> */}

            <div className="footer-col">
              <h4 id="footer">Contact</h4>
              <ul>
                <li>
                  <a href="/">
                    Address:{' '}
                    <p>NOUAKCHOTT STREET, ZONE 1 WUSE,ABUJA. NIGERIA</p>{' '}
                  </a>
                </li>
                <li>
                  <a href="/">Email Us: info.adnek@gmail.com </a>
                </li>
              </ul>
            </div>

            {/* <div className="footer-col form">
              <h4 style={{ color: 'white' }}>Join Our Newsletter</h4>
              <input type="email" placeholder="Enter Email" id="footer-email" />
              <input type="submit" value="Sign Up" id="footer-email-btn" />
            </div> */}
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <div className="social-links">
              <a href="https://wa.me/message/HMAFRRDUD6FJP1">
                <FaWhatsappSquare className="whatsapp" />
              </a>

              <a href="https://instagram.com/dublincity_whiskey_gin_ng?igshid=YmMyMTA2M2Y=">
                <span>
                  <FaInstagramSquare className="instagram" />
                </span>
              </a>

              <a href="https://www.facebook.com/dublincityspirits55/">
                <FaFacebook className="facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
