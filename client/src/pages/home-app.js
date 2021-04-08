import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layouts
import HeaderApp from './Layouts/HeaderApp';
import FooterLight from './Layouts/footer-light';

// Shared
import AboutUs from './SubPages/App/about-us';
import Features from './SubPages/App/features';
import Video from './SubPages/App/video';
import ScreenShot from './SubPages/App/screen-shot';
import Testimonial from './SubPages/App/testimonial';
import DownloadApp from './SubPages/App/download-app';
import Team from './SubPages/App/team';
import Pricing from './SubPages/App/pricing';
import Subscribe from './SubPages/App/subscribe';
import Contact from './SubPages/App/contact';

// Images
import iphone_white from '../images/iphone_white.png';

class homeApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('nav-bar').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
          }
      }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <HeaderApp />

                {/* Home Section */}
                <section className="bg-home-app section" id="home">
                    <div className="bg-app-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row vertical-content">
                                    <div className="col-lg-4">
                                        <div>
                                            <img src={iphone_white} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 offset-lg-1">
                                        <div className="app-home-title text-white">
                                            <h1 className="mb-4">Professional App Landing Page Template</h1>
                                            <p className="f-17 text-white-50">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                            <div className="mt-5 mb-4">
                                                <Link to="#" className="btn btn-custom m-1">Download Now</Link>
                                                <Link to="#" className="btn btn-custom-white m-1">Learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AboutUs */}
                <AboutUs />

                {/* Features */}
                <Features />

                {/* Video */}
                <Video />

                {/* ScreenShot */}
                <ScreenShot />

                {/* Testimonial */}
                <Testimonial />

                {/* DownloadApp */}
                <DownloadApp />

                {/* Team */}
                <Team />

                {/* Pricing */}
                <Pricing />

                {/* Subscribe */}
                <Subscribe />

                {/* Contact */}
                <Contact />

                {/* Footer */}
                <FooterLight />

            </React.Fragment >
        );
    }
}

export default homeApp;


