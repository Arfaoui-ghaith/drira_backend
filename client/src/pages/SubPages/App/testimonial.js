import React, { Component } from 'react';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../../css/pe-icon-7.css';

class Testimonial extends Component {


    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
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

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="testimonial">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Testimonial</p>
                                    <h3>What clients Say</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div id="carouselExampleIndicators" className="carousel slide">
                               

                                    <div className="carousel-inner" id="customCarousel">
                                        <RBCarousel
                                            version={4}
                                            autoplay={this.state.autoplay}
                                            pauseOnVisibility={true}
                                            onSelect={this.visiableOnSelect}
                                            slideshowSpeed={1000}
                                        >
                                            <div className="item" align="center">
                                                <div className="app-testi-box p-4">
                                                    <p className="mb-4 text-muted">"The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language."</p>
                                                    <div className="app-testi-icon mb-3">
                                                        <i className="mdi mdi-format-quote-open text-custom h1"></i>
                                                    </div>
                                                    <p className="mb-2 f-14 text-custom">Co-Founder</p>
                                                    <h5 className="f-18">Ronnie Black</h5>
                                                </div>
                                            </div>
                                            <div className="item"  align="center">
                                                <div className="app-testi-box p-4">
                                                    <p className="mb-4 text-muted">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
                                                    <div className="app-testi-icon mb-3">
                                                        <i className="mdi mdi-format-quote-open text-custom h1"></i>
                                                    </div>
                                                    <p className="mb-2 f-14 text-custom">Founder</p>
                                                    <h5 className="f-18">Mitchell Lopez</h5>
                                                </div>
                                            </div>
                                            <div className="item"  align="center">
                                                <div className="app-testi-box p-4">
                                                    <p className="mb-4 text-muted">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."</p>
                                                    <div className="app-testi-icon mb-3">
                                                        <i className="mdi mdi-format-quote-open text-custom h1"></i>
                                                    </div>
                                                    <p className="mb-2 f-14 text-custom">Web Developer</p>
                                                    <h5 className="f-18">Michael Conner</h5>
                                                </div>
                                            </div>
                                        </RBCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;


