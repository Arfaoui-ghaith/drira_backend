import React, { Component } from 'react';
import img1 from "../../../images/features/img-1.png";

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Features</p>
                                    <h3>Key features of the product</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <div className="soft-features-box p-4">
                                        <div className="soft-features-icon float-left">
                                            <i className="pe-7s-helm h1 mr-4 mt-3 text-custom"></i>
                                        </div>
                                        <div className="soft-features-desc">
                                            <h5 className="f-18">Creative Design</h5>
                                            <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                                        </div>
                                    </div>
                                    <div className="soft-features-box p-4">
                                        <div className="soft-features-icon float-left">
                                            <i className="pe-7s-vector h1 mr-4 mt-3 text-custom"></i>
                                        </div>
                                        <div className="soft-features-desc">
                                            <h5 className="f-18">Easy to customize</h5>
                                            <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                                        </div>
                                    </div>
                                    <div className="soft-features-box p-4">
                                        <div className="soft-features-icon float-left">
                                            <i className="pe-7s-monitor h1 mr-4 mt-3 text-custom"></i>
                                        </div>
                                        <div className="soft-features-desc">
                                            <h5 className="f-18">Responsive Design</h5>
                                            <p className="text-muted mb-0">The Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat, eaque ipsa quae ab illo facere</p>
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

export default Features;


