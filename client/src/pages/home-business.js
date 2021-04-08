import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Business/about-us';
import Services from './SubPages/Business/services';
import Portfolio from './SubPages/Business/portfolio';
import Testimonial from './SubPages/Business/testimonial';
import Team from './SubPages/Business/team';
import Counter from './SubPages/Business/counter';
import Pricing from './SubPages/Business/pricing';
import Client from './SubPages/Business/client';
import Contact from './SubPages/Business/contact';
import '../css/pe-icon-7.css';

import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BhB1 from '../images/bg-home-business-1.jpg';
import BhB2 from '../images/bg-home-business-2.jpg';
import BhB3 from '../images/bg-home-business-3.jpg';

class homeBusiness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('nav-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="home-slider" id="home">
                    <div className="container-fluid">
                        <div className="row">

                            <RBCarousel
                                version={4}
                                autoplay={this.state.autoplay}
                                pauseOnVisibility={true}
                                onSelect={this.visiableOnSelect}
                                slideshowSpeed={4000}
                            >
                                <div className="item">
                                    <div className="carousel-item active" style={{ backgroundImage: `url(${BhB1})` }}>
                                        <div className="bg-overlay"></div>
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="busi-home-title text-white text-center">
                                                                <h1 className="animated fadeInDownBig animation-delay-1 mb-4">Professional Business Landing Template</h1>
                                                                <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">It is a long established fact that a reader will be distracted by the readable content of a page at its layout. The point of using Lorem normal distribution of letters</p>
                                                                <div className="pt-4">
                                                                    <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Learn more</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="carousel-item active" style={{ backgroundImage: `url(${BhB2})` }}>
                                        <div className="bg-overlay"></div>
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="busi-home-title text-white text-center">
                                                                <h1 className="animated fadeInDownBig animation-delay-1 mb-4">Best Solution for your business</h1>
                                                                <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">It is a long established fact that a reader will be distracted by the readable content of a page at its layout. The point of using Lorem normal distribution of letters</p>
                                                                <div className="pt-4">
                                                                    <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Learn more</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="carousel-item active" style={{ backgroundImage: `url(${BhB3})` }}>
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">
                                                            <div className="busi-home-title text-white text-center">
                                                                <h1 className="animated fadeInDownBig animation-delay-1 mb-4">Create amazing website with Zairo</h1>
                                                                <p className="animated fadeInUpBig animation-delay-8 f-16 pt-2 text-light-custom">It is a long established fact that a reader will be distracted by the readable content of a page at its layout. The point of using Lorem normal distribution of letters</p>
                                                                <div className="pt-4">
                                                                    <Link to="#" className="btn btn-custom animated fadeInUpBig animation-delay-12">Learn more</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </RBCarousel>

                        </div>
                    </div>
                </section>

                {/* AboutUs */}
                <AboutUs />

                {/* Services */}
                <Services />

                {/* Portfolio */}
                <Portfolio />

                {/* Testimonial */}
                <Testimonial />

                {/* Team */}
                <Team />

                {/* Counter */}
                <Counter />

                {/* Pricing */}
                <Pricing />

                {/* Client */}
                <Client />

                {/* Contact */}
                <Contact />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;


