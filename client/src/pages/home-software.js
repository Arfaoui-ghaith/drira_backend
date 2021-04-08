import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Layouts
import HeaderSoft from './Layouts/header-soft';
import FooterLight from './Layouts/footer-light';

// Shared
import AboutUs from './SubPages/Software/about-us';
import Features from './SubPages/Software/features';
import Features1 from './SubPages/Software/features1';
import Cta from './SubPages/Software/cta';
import Team from './SubPages/Software/team';
import Testimonial from './SubPages/Software/testimonial';
import Pricing from './SubPages/Software/pricing';
import Contact from './SubPages/Software/contact';

import '../css/pe-icon-7.css';

//home images
import showcase from '../images/showcase.png';

class homeSoftware extends Component {

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
                <HeaderSoft />

                {/* Home Section */}
                <section className="bg-home-software" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="soft-home-title text-white">
                                            <h2>Here is the best way to present your products</h2>
                                            <p className="mt-4 text-white-50">We put a lot of effort in design, as it’s the most important ingredient of successful website.Sed ut unde omnis error sit.We put a lot of effort in design, as it’s the most important ingredient of successful website.</p>
                                            <div className="mt-5 mb-4">
                                                <Link to="#" className="btn btn-custom m-1">Download Now</Link>
                                                <Link to="#" className="btn btn-custom-white ml-2">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 offset-lg-1">
                                        <div className="software-home-img">
                                            <img src={showcase} alt="" className="img-fluid mx-auto d-block" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mouse-down text-center">
                                            <a href="#about" className="down-scroll text-dark">
                                                <i className="mdi mdi-arrow-down h4"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

<AboutUs />
<Features />
<Features1 />
<Cta />
<Team />
<Testimonial />
<Pricing />
<Contact />



                {/* Footer */}
                <FooterLight />

            </React.Fragment >
        );
    }
}

export default homeSoftware;


