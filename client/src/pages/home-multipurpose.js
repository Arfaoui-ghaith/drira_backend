import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ScrollTo } from "react-scroll-to";
// Layouts
import HeaderMulti from './Layouts/header-multi';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Multipurpose/about-us';
import Features from './SubPages/Multipurpose/features';
import Services from './SubPages/Multipurpose/services';
import Cta from './SubPages/Multipurpose/cta';
import Testimonial from './SubPages/Multipurpose/testimonial';
import Team from './SubPages/Multipurpose/team';
import Pricing from './SubPages/Multipurpose/pricing';
import Client from './SubPages/Multipurpose/client';
import Contact from './SubPages/Multipurpose/contact';


// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import '../css/pe-icon-7.css';

class homeBusiness extends Component {

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
                <HeaderMulti />

                {/* Home Section */}
                <section className="bg-home" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="home-title text-white">
                                            <h1><i className="pe-7s-rocket"></i></h1>
                                            <h5 className="mb-3">Discover Zairo Today</h5>
                                            <h1>A digital studio crafting beautiful experiences.</h1>
                                            <p className="mt-4">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin.</p>
                                            <div className="watch-video mt-5">
                                                <Link to="#" className="btn btn-custom mr-4">Learn More</Link>
                                                <Link to="#" onClick={this.openModal} className="video-play-icon text-white"><i className="mdi mdi-play play-icon-circle mr-2"></i> <span>Watch The Video!</span></Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
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
                <Features />
                <Services />
                <Cta />
                <Testimonial />
                <Team />
                <Pricing />
                <Client />
                <Contact />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;


