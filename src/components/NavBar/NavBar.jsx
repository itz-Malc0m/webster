import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import dLogo from '../../assets/Artwork.png';
import dragon from '../../assets/Seahorse.png';
import './NavStyle.css';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      {/* NavLogo */}
      <div className="nav-logo app__navbar-logo">
        <a href="#logoHome">
          <img
            src={dragon}
            alt="logo"
            style={{ width: '90%', height: '80px' }}
          />
        </a>
      </div>
      {/* Nav-Items */}

      <ul className="app__navbar-links">
        <li className="">
          <a href="#home">Home</a>
        </li>
        <li className="">
          <a href="#about">About</a>
        </li>
        <li className="">
          <a href="#menu">Brands</a>
        </li>
        <li className=" ">
          <a href="#footer">Contact</a>
        </li>
        <li className="">
          <a href="#buy-now">Buy-Now</a>
        </li>
      </ul>

      {/* <div className="nav-bar_item montserrat-bold-black-18px">
                <div className="place">
                Home
                </div>
                <div className="nav-bar_item-item">
                About-US
                </div>
                <div className="nav-bar_item-item">
                Brands
                </div>
                <div className="nav-bar_item-item">
                Buy-Now
                </div>
          </div> */}

      {/* SmallScreen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#brand" onClick={() => setToggleMenu(false)}>
                  Brands
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
