import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../images/clients/1.png';
import img2 from '../../../images/clients/2.png';
import img3 from '../../../images/clients/3.png';
import img4 from '../../../images/clients/4.png';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
            <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cta-content text-center">
                            <h4 className="mb-4">Trusted By Thousands</h4>
                            <p className="text-muted f-16">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal of letters</p>
                            <div className="pt-3 pb-3">
                                <Link to="#" className="btn btn-custom">Join Now <i className="mdi mdi-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="client-images">
                            <img src={img1} alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="client-images">
                            <img src={img2} alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="client-images">
                            <img src={img3} alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="client-images">
                            <img src={img4} alt="logo-img" className="mx-auto img-fluid d-block" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Features;


