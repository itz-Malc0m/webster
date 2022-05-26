import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import whiskey from '../../assets/whiskey1.png';
import dragon from '../../assets/Seahorse.png';
import gin from '../../assets/gin1.png';
import './Brand.css';
// import BrandCaro from './BrandCaro';

const Brand = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        {/* <SubHeading title="Menu that fits your palatte" /> */}
        <h1 className="headtext__cormorant headin">Our Brand&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p
            className="app__specialMenu-menu_heading"
            style={{ color: 'black' }}
          >
            Whiskey{' '}
          </p>
          <div className="app__specialMenu_menu_items">
            <Row fluid="md">
              <Col md={8} sd={2}>
                <img src={whiskey} style={{ width: '100%' }} alt="whiskey" />
                <p className="content-whiskey">
                  Our Single Malt is a delicious deep natural gold spirit,
                  inspired by the historical “Whisky” brands of olde, with a
                  robust vintage flavour reminiscent of Dublin’s Victorian
                  distilling heritage. Our whiskey has been awarded one of
                  Ireland&apos;s <strong>NO.1</strong>
                  <br />
                  and if not, the finest and smoothest Irish whiskey with a
                  Dublin accent. We offer a smooth blend made for everyone. It
                  brings friends, families and even enemies together. <br />
                  Grab yourself a botttle and feel the greatness in Dublin City
                  Whiskey.
                </p>
                <br />
                <a href="https://dublincityspirits.com/our-whiskey/#">
                  <button type="button" className="custom__button">
                    Know More
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img
            src={dragon}
            style={{ width: '100%' }}
            className="nuvo "
            alt="bg"
          />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Gin</p>
          <div className="app__specialMenu_menu_items">
            <Row>
              <Col md={8} sd={2}>
                <img src={gin} alt="gin" style={{ width: '100%' }} />
                <p className="content-gin">
                  A handcrafted gin distilled London Dry style in super premium
                  smallbatch, an Irish Whey spirit base ideal for our recipe
                  giving an extra silky finish you’ll love. Our Gin has been
                  recommended by Mixologists around the globe, because of its
                  distinctive taste. Our Gin has the guarantee to make any and
                  every Cocktail a delight.
                </p>
                <br />
                <a href="https://dublincityspirits.com/our-gin/#">
                  <button type="button" className="custom__button">
                    Know More
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div> */}
      {/* <BrandCaro /> */}
    </div>
  );
};

export default Brand;
