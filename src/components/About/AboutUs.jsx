import React from 'react';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import dragon from '../../assets/Artwork.png';
import nuvo from '../../assets/Bottles.png';
import overlayImg from '../../assets/DublinCitySpirit.png';
import './About.css';

const AboutUs = () => (
  <>
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={overlayImg} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          {/* <img src={dragon} alt="about_spoon" className="spoon__img" /> */}
          <p className="aboutUs-text">
            Dublin City Spirits is the brainchild of husband and wife team Jim
            O’Connor and Sheila Cooney. Returning home after 25 years abroad we
            decided to establish a family business in the form of a Dublin
            brand. The dream began with a plan to create a top class gin for the
            hometown of Dublin. We set ourselves high goals, quality, taste, and
            styling were top of the list, aiming to serve as Dublin’s hometown
            brand especially internationally, and simply to produce the BEST
            Irish gin, now a multiple GOLD medal winner, and simply World Class.
            Adding to our portfolio was always an ambition and the dream
            continues with a golden spirit coming of age in the form of our
            first release 100% Single Malt. Our “Dublin City Whiskey” will form
            a key driver in our portfolio and we’re proud to wave the Irish flag
            within this amazing category.
          </p>
          <a href="https://dublincityspirits.com/about-us/">
            <button type="button" className="custom__button">
              Know More
            </button>
          </a>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img
            src={nuvo}
            style={{ width: '268px', height: '400px' }}
            alt="about_knife"
          />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          {/* <img src={dragon} alt="about_spoon" className="spoon__img" /> */}
          <p className="history-text">
            Under the Dublin City Spirits banner, adding a Whiskey was an
            important ambition for the future growth of our budding company.
            Doing it right was yet another challenge but inspiration was close
            to hand with Jim born in the famous Liberties area of Dublin, the
            heart of Irish Whiskey in the nineteenth century. Adding a golden
            spirit was all but a dream when we started the Dublin City Gin
            Company but when the brand concept evolved, it became clear the gin
            needed a complimentary product offering. Inspired by the history of
            Dublin, we aim to create Whiskey as approachable and robust as the
            spirited Dubliners themselves. Our vision for golden spirits is
            inspired by the historical “Whisky” brands of Ireland’s distilling
            era. Reminiscent of Dublin’s Victorian distilling heritage, we aimed
            to capture a robust vintage flavour. The Single Malt seemed most
            appropriate for our first small-batch release to capture the
            character of Dublin City Past and Present.
          </p>
          <a href="https://dublincityspirits.com/our-founders/#">
            <button type="button" className="custom__button">
              Know More
            </button>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
