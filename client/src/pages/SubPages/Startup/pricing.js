import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Pricing</p>
                                    <h3>Choose Plan</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="startup-pricing-table text-center bg-light p-4 mt-4">
                                    <div className="mt-2 mb-4">
                                        <h4>Basic</h4>
                                    </div>
                                    <div className="pricing-content p-4">
                                        <h2><sup><small>$</small></sup>19/<span className="f-18">Mo</span></h2>
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
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="startup-pricing-table-active text-center bg-light p-4 mt-4">
                                    <div className="mt-2 mb-4">
                                        <h4 className="text-custom">Premium</h4>
                                    </div>
                                    <div className="pricing-content p-4">
                                        <h2><sup><small>$</small></sup>29/<span className="f-18">Mo</span></h2>
                                        <div className="price-desc">
                                            <div className="text-muted mt-4">
                                                <p><i className="mdi mdi-check text-custom mr-2"></i> Bandwidth: <span>2GB</span></p>
                                                <p><i className="mdi mdi-check text-custom mr-2"></i> Onlinespace: <span>1GB</span></p>
                                                <p><i className="mdi mdi-check text-custom mr-2"></i> Support: <span>Yes</span></p>
                                                <p><i className="mdi mdi-check text-custom mr-2"></i> Domain: <span>3</span></p>
                                                <p><i className="mdi mdi-check text-custom mr-2"></i> Hidden Fees: <span>No</span></p>
                                            </div>
                                            <div className="pt-3">
                                                <Link to="#" className="btn btn-custom">Join Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="startup-pricing-table text-center bg-light p-4 mt-4">
                                    <div className="mt-2 mb-4">
                                        <h4>Developer</h4>
                                    </div>
                                    <div className="pricing-content p-4">
                                        <h2><sup><small>$</small></sup>39/<span className="f-18">Mo</span></h2>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Pricing;


