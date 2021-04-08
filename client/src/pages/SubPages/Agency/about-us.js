import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import img1 from '../../../images/agency-about/img-1.jpg';
import img2 from '../../../images/agency-about/img-2.jpg';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">About us</p>
                                    <h3>Who We Are</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content mt-4">
                            <Col lg="7">
                                <Row>
                                    <Col lg="6">
                                        <div className="agency-about-img">
                                            <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                            <div className="agency-about-img-desc text-center text-white">
                                                <h5 className="mt-3 f-17">Strategy Solutions</h5>
                                                <p>There are many variations</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="agency-about-img mt-5">
                                            <img src={img2}  alt="" className="img-fluid mx-auto d-block" />
                                            <div className="agency-about-img-desc text-center text-white">
                                                <h5 className="mt-3 f-17">Dedicated Support</h5>
                                                <p>The Sed ut perspiciatis unde</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="5">
                                <div className="about-content p-4">
                                    <h6 className="mb-4">A digital web studio creating stunning experiences</h6>
                                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a normal distribution of letters.</p>
                                    <div className="pt-4">
                                        <Link to="#" className="btn btn-custom">Learn more <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;


