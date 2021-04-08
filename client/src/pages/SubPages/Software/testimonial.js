import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

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
                <section className="section bg-soft" id="testimonial">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-white text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle text-white-50">Testimonial</p>
                                    <h3>What clients Say</h3>
                                    <p className="text-white-50 mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12">

                                <RBCarousel
                                    version={4}
                                    autoplay={this.state.autoplay}
                                    pauseOnVisibility={true}
                                    onSelect={this.visiableOnSelect}
                                    slideshowSpeed={1000}
                                >
                                    <div className="item">
                                        <Row>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 mb-4 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Robert Phillips</h5>
                                                            <p className="f-14 text-white-50">Manager</p>
                                                        </div>
                                                        <p className="mb-0">The European languages are members of the same family. Their separate existence For science, etc.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Daniel Davis</h5>
                                                            <p className="f-14 text-white-50">Web Designer</p>
                                                        </div>
                                                        <p className="mb-0">The Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Ronald Perez</h5>
                                                            <p className="f-14 text-white-50">Web Developer</p>
                                                        </div>
                                                        <p className="mb-0">The new common language will be more simple and regular than the existing European languages.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="item">
                                        <Row>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Kenneth Barnes</h5>
                                                            <p className="f-14 text-white-50">Manager</p>
                                                        </div>
                                                        <p className="mb-0">Nam libero tempore, cum soluta nobis est eligendi cumque nihil impedit quo minus id quod maxime</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">

                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Michael Gross</h5>
                                                            <p className="f-14 text-white-50">Web Designer</p>
                                                        </div>
                                                        <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Robert Gains</h5>
                                                            <p className="f-14 text-white-50">Web Developer</p>
                                                        </div>
                                                        <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>


                                    <div className="item">
                                        <Row>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 mb-4 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Robert Phillips</h5>
                                                            <p className="f-14 text-white-50">Manager</p>
                                                        </div>
                                                        <p className="mb-0">The European languages are members of the same family. Their separate existence For science, etc.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Daniel Davis</h5>
                                                            <p className="f-14 text-white-50">Web Designer</p>
                                                        </div>
                                                        <p className="mb-0">The Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="4" sm="6">
                                                <div className="item soft-testi-box ml-3 mr-3 p-4">
                                                    <div className="text-white">
                                                        <div className="soft-testi-icon float-left mr-4">
                                                            <i className="mdi mdi-format-quote-open h2 rounded-circle"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="f-17">Ronald Perez</h5>
                                                            <p className="f-14 text-white-50">Web Developer</p>
                                                        </div>
                                                        <p className="mb-0">The new common language will be more simple and regular than the existing European languages.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                </RBCarousel>


                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;


