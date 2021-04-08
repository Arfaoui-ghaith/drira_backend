import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Agency/about-us';
import Services from './SubPages/Agency/services';
import Portfolio from './SubPages/Agency/portfolio';
import Cta from './SubPages/Agency/cta';
import Testimonial from './SubPages/Agency/testimonial';
import Pricing from './SubPages/Agency/pricing';
import Cilents from './SubPages/Agency/client';
import Contact from './SubPages/Agency/contact';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class homeAgency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
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
                <Header />

                {/* Home Section */}
                <section className="bg-home-agency" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row>
                                    <Col lg={12}>
                                        <div className="agency-home-title text-center text-white mx-auto">
                                            <h1 className="display-4 mb-4">Make your Site Amazing & Unique </h1>
                                            <p className="text-light f-17">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters</p>
                                            <div className="watch-video mt-5">
                                                <Link to="#" onClick={this.openModal}  className="video-play-icon text-white"><i className="mdi mdi-play play-icon mr-2 h4"></i></Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About us */}
                <AboutUs />

                {/* Services */}
                <Services />

                {/* Work */}
                <Portfolio />

                {/* Cta */}
                <Cta />

                {/* Testimonial */}
                <Testimonial />

                {/* Pricing */}
                <Pricing />

                {/* Cilents */}
                <Cilents />

                {/* Contact */}
                <Contact />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeAgency;


