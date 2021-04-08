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
                        <div className="pricing-table bg-light text-center mt-4 p-4">
                            <div className="soft-pricing-header pt-4">
                                <h4 className="text-custom mb-4">Basic</h4>
                                <div className="soft-pricing-price">
                                    <h5 className="bg-custom text-white"><sup><small>$</small></sup>19/<span className="f-18">Mo</span></h5>
                                </div>
                            </div>
                            <div className="price-desc">
                                <div className="plan-fetures text-muted mt-4">
                                    <p className="pricing-list">5 Projects</p>
                                    <p className="pricing-list">1 GB Storage</p>
                                    <p className="pricing-list">No Domain</p>
                                    <p className="pricing-list">1 User</p>
                                    <p className="pricing-list">24x7 Support</p>
                                </div>
                                <div className="pt-3 pb-3">
                                    <Link to="#" className="btn btn-custom">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-table bg-custom text-white text-center p-4 mt-4">
                            <div className="soft-pricing-header pt-4">
                                <h4 className="mb-4">Premium</h4>
                                <div className="soft-pricing-price">
                                    <h5 className="bg-white text-custom"><sup><small>$</small></sup>29/<span className="f-18">Mo</span></h5>
                                </div>
                            </div>
                            <div className="price-desc">
                                <div className="plan-fetures mt-4">
                                    <p className="pricing-list">5 Projects</p>
                                    <p className="pricing-list">1 GB Storage</p>
                                    <p className="pricing-list">No Domain</p>
                                    <p className="pricing-list">1 User</p>
                                    <p className="pricing-list">24x7 Support</p>
                                </div>
                                <div className="pt-3 pb-3">
                                    <Link to="#" className="btn btn-custom-white">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-table bg-light text-center p-4 mt-4">
                            <div className="soft-pricing-header pt-4">
                                <h4 className="text-custom mb-4">Developer</h4>
                                <div className="soft-pricing-price">
                                    <h5 className="bg-custom text-white"><sup><small>$</small></sup>39/<span className="f-18">Mo</span></h5>
                                </div>
                            </div>
                            <div className="price-desc">
                                <div className="plan-fetures text-muted mt-4">
                                    <p className="pricing-list">5 Projects</p>
                                    <p className="pricing-list">1 GB Storage</p>
                                    <p className="pricing-list">No Domain</p>
                                    <p className="pricing-list">1 User</p>
                                    <p className="pricing-list">24x7 Support</p>
                                </div>
                                <div className="pt-3 pb-3">
                                    <Link to="#" className="btn btn-custom">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Pricing;


