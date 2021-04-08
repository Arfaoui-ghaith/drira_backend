import React, { Component } from 'react';
import img1 from '../../../images/features/img-1.png';
import img2 from '../../../images/features/img-2.png';

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
                        <div className="row vertical-content">
                            <div className="col-lg-6">
                                <div className="feautures-content p-5">
                                    <div className="feautures-icon mb-4">
                                        <i className="mdi mdi-chart-bar h4 text-custom"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-3">Creative Design</h5>
                                        <p className="text-muted">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                        <div>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Sed ut perspiciatis unde omnis iste natus</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Proceed from the head and those from the heart</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Unconsciously been working in his mind</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>
                        <div className="row vertical-content mt-5">
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feautures-content p-5">
                                    <div className="feautures-icon mb-4">
                                        <i className="mdi mdi-apple-keyboard-command h4 text-custom"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-3">Easy to customize</h5>
                                        <p className="text-muted">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                        <div>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Sed ut perspiciatis unde omnis iste natus</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Proceed from the head and those from the heart</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i>Unconsciously been working in his mind</p>
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


