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
                <section className="section bg-light" id="pricing">
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
                            <div className="col-lg-6">
                                <div className="app-pricing-table bg-white text-center p-4 mt-4">
                                    <div className="row vertical-content">
                                        <div className="col-md-6">
                                            <div className="app-pricing-header">
                                                <h5 className="text-custom mb-4">Free</h5>
                                                <h2><sup><small>$</small></sup>0/<span className="f-18">Mo</span></h2>
                                                <div className="pt-4">
                                                    <Link to="#" className="btn btn-custom btn-sm">Join Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="price-desc">
                                                <div className="mt-3 price-feature">
                                                    <p>Bandwidth: <span className="text-custom">500MB</span></p>
                                                    <p>Onlinespace: <span className="text-custom">25MB</span></p>
                                                    <p>Support: <span className="text-custom">No</span></p>
                                                    <p>Domain: <span className="text-custom">0</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="app-pricing-table bg-white text-center p-4 mt-4">
                                    <div className="row vertical-content">
                                        <div className="col-md-6">
                                            <div className="app-pricing-header">
                                                <h5 className="text-custom mb-4">Basic</h5>
                                                <h2><sup><small>$</small></sup>19/<span className="f-18">Mo</span></h2>
                                                <div className="pt-4">
                                                    <Link to="#" className="btn btn-custom btn-sm">Join Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="price-desc">
                                                <div className="mt-3 price-feature">
                                                    <p>Bandwidth: <span className="text-custom">1GB</span></p>
                                                    <p>Onlinespace: <span className="text-custom">50MB</span></p>
                                                    <p>Support: <span className="text-custom">No</span></p>
                                                    <p>Domain: <span className="text-custom">1</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="app-pricing-table bg-white text-center p-4 mt-4">
                                    <div className="row vertical-content">
                                        <div className="col-md-6">
                                            <div className="app-pricing-header">
                                                <h5 className="text-custom mb-4">Premium</h5>
                                                <h2><sup><small>$</small></sup>29/<span className="f-18">Mo</span></h2>
                                                <div className="pt-4">
                                                    <Link to="#" className="btn btn-custom btn-sm">Join Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="price-desc">
                                                <div className="mt-3 price-feature">
                                                    <p>Bandwidth: <span className="text-custom">2GB</span></p>
                                                    <p>Onlinespace: <span className="text-custom">100MB</span></p>
                                                    <p>Support: <span className="text-custom">No</span></p>
                                                    <p>Domain: <span className="text-custom">2</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="app-pricing-table bg-white text-center p-4 mt-4">
                                    <div className="row vertical-content">
                                        <div className="col-md-6">
                                            <div className="app-pricing-header">
                                                <h5 className="text-custom mb-4">Developer</h5>
                                                <h2><sup><small>$</small></sup>39/<span className="f-18">Mo</span></h2>
                                                <div className="pt-4">
                                                    <Link to="#" className="btn btn-custom btn-sm">Join Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="price-desc">
                                                <div className="mt-3 price-feature">
                                                    <p>Bandwidth: <span className="text-custom">4GB</span></p>
                                                    <p>Onlinespace: <span className="text-custom">200MB</span></p>
                                                    <p>Support: <span className="text-custom">Yes</span></p>
                                                    <p>Domain: <span className="text-custom">Unlimited</span></p>
                                                </div>
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


