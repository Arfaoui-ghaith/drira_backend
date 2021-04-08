import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="pricing">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Pricing</p>
                                    <h3>Choose Plan</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <div className="pricing-table-agency bg-white p-5 mt-4">
                                    <div className="pricing-header border-bottom">
                                        <div className="pricing-title">
                                            <div className="float-left">
                                                <h5 className="text-custom">Basic</h5>
                                            </div>
                                            <div className="float-right">
                                                <div>
                                                    <i className="pe-7s-check h2"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <h2><sup><small>$</small></sup>19/<span className="f-18">Mo</span></h2>
                                        </div>
                                    </div>
                                    <div className="price-desc">
                                        <div className="text-muted mt-4">
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Bandwidth: <span className="text-custom">1GB</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Onlinespace: <span className="text-custom">500MB</span></p>
                                            <p><i className="mdi mdi-close text-custom mr-2"></i> Support: <span className="text-custom">No</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Domain: <span className="text-custom">1</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Hidden Fees: <span className="text-custom">No</span></p>
                                        </div>
                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-custom">Join Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="pricing-table-agency bg-custom text-white p-5 mt-4">
                                    <div className="pricing-header border-bottom">
                                        <div className="pricing-title">
                                            <div className="float-left">
                                                <h5>Premium</h5>
                                            </div>
                                            <div className="float-right">
                                                <div>
                                                    <i className="pe-7s-check h2"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <h2><sup><small>$</small></sup>29/<span className="f-18">Mo</span></h2>
                                        </div>
                                    </div>
                                    <div className="price-desc">
                                        <div className="mt-4">
                                            <p><i className="mdi mdi-check text-white-50 mr-2"></i> Bandwidth: <span>2GB</span></p>
                                            <p><i className="mdi mdi-check text-white-50 mr-2"></i> Onlinespace: <span>1GB</span></p>
                                            <p><i className="mdi mdi-check text-white-50 mr-2"></i> Support: <span>Yes</span></p>
                                            <p><i className="mdi mdi-check text-white-50 mr-2"></i> Domain: <span>3</span></p>
                                            <p><i className="mdi mdi-check text-white-50 mr-2"></i> Hidden Fees: <span>No</span></p>
                                        </div>
                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-custom-white">Join Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg="4">
                                <div className="pricing-table-agency bg-white p-5 mt-4">
                                    <div className="pricing-header border-bottom">
                                        <div className="pricing-title">
                                            <div className="float-left">
                                                <h5 className="text-custom">Developer</h5>
                                            </div>
                                            <div className="float-right">
                                                <div>
                                                    <i className="pe-7s-check h2"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <h2><sup><small>$</small></sup>39/<span className="f-18">Mo</span></h2>
                                        </div>
                                    </div>
                                    <div className="price-desc">
                                        <div className="text-muted mt-4">
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Bandwidth: <span className="text-custom">3GB</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Onlinespace: <span className="text-custom">2GB</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Support: <span className="text-custom">Yes</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Domain: <span className="text-custom">Unlimited</span></p>
                                            <p><i className="mdi mdi-check text-custom mr-2"></i> Hidden Fees: <span className="text-custom">No</span></p>
                                        </div>
                                        <div className="pt-3">
                                            <Link to="#" className="btn btn-custom">Join Now</Link>
                                        </div>
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

export default Pricing;


