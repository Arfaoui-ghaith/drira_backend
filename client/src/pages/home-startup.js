import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";

// Layouts
import HeaderStart from './Layouts/header-start';
import FooterLight from './Layouts/footer-light';

// Shared
import AboutUs from './SubPages/Startup/about-us';
import Services from './SubPages/Startup/services';
import Testimonial from './SubPages/Startup/testimonial';
import Cta from './SubPages/Startup/cta';
import Team from './SubPages/Startup/team';
import Pricing from './SubPages/Startup/pricing';
import Client from './SubPages/Startup/client';
import Subscribe from './SubPages/Startup/subscribe';
import Contact from './SubPages/Startup/contact';

import '../css/pe-icon-7.css';


class homeSoftware extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

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
                <HeaderStart />

                {/* Home Section */}
                <section className="bg-home-start-up" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="startup-home-title text-white text-center">
                                            <h1><i className="pe-7s-rocket"></i></h1>
                                            <h1>Zairo is meant to simplify the website experience</h1>
                                            <p className="mt-4 text-light-custom f-17">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point is that a normal distribution of letters</p>
                                            <div className="mt-5">
                                                <Link to="#" className="btn btn-custom m-2">Get started</Link>
                                                <Link to="#" className="btn btn-custom-white m-2">Download Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mouse-down text-center">
                                        <ScrollTo>
                                                {({ scrollTo }) => (
                                                    <Link to="#about" onClick={() => scrollTo({  y: 710, smooth: true })} className="down-scroll text-dark">
                                                            <i className="mdi mdi-arrow-down h4"></i>
                                                        </Link>
                                                )}
                                            </ScrollTo>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AboutUs />
                <Services />
                <Testimonial />
                <Cta />
                <Team />
                <Pricing />
                <Client />
                <Subscribe />
                <Contact />

                {/* Footer */}
                <FooterLight />

            </React.Fragment >
        );
    }
}

export default homeSoftware;


