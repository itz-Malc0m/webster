import React from 'react';
// import adLogo from '../../assets/logo.png';
import bottles from '../../assets/Bottles.png';
import dBC from '../../assets/DublinCitySpirit.png';
// import dragon from '../../assets/Seahorse.png';
import './header.css';

const Header = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1 className="headin">Welcome</h1>
              <img
                src={dBC}
                // style={{ width: '100%' }}
                className="header-img"
                alt="adlogo"
              />
              <p>Irish Spirits with a Dublin Accent</p>
              <div className="btn-row">
                <button className="custom__button">
                  <a href="#about">Explore Us</a>
                </button>
              </div>
            </div>
          </div>
          <div className="app__wrapper_img">
            <img src={bottles} alt="" className="sd-2" />
            {/* <img
              src={dragon}
              // style={{ width: '100%' }}
              className="nuvo "
              alt="bg"
            /> */}
          </div>
          {/* Images */}
          {/* <div className="hero-imgs">
                  <div className="hero-img-inner">
                    <div className="hero-img bottles">
                      <img src={bottles} alt="bottles"  srcset="" />
                    </div>
                      <div className="hero-img-nuvo">
                        <img src={nuvo} alt="nuvo"className='nuvo' style={{width:'45%' }} />
                      </div>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
