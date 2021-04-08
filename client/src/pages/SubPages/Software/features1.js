import React, { Component } from 'react';

import featuresImg from '../../../images/soft-features-img.png';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-soft">
                    <div className="container">
                        <div className="row vertical-content">
                            <div className="col-lg-6">
                                <div className="soft-feautures-content pt-5 pb-5">
                                    <div className="text-white">
                                        <h4 className="mb-4">Unique and Creative functionality With awesome website</h4>
                                        <p className="text-white-50 mb-4">The European languages are members of the same family. Their separate existence is a myth.</p>
                                        <div>
                                            <p className="mb-1 text-white-50"><i className="mdi mdi-check-all text-custom mr-2"></i> We put a lot of effort in design.</p>
                                            <p className="mb-1 text-white-50"><i className="mdi mdi-check-all text-custom mr-2"></i> The most important ingredient of successful website.</p>
                                            <p className="mb-1 text-white-50"><i className="mdi mdi-check-all text-custom mr-2"></i> Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                            <p className="mb-1 text-white-50"><i className="mdi mdi-check-all text-custom mr-2"></i> Submit Your Orgnization.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="">
                                    <img src={featuresImg} alt="" className="img-fluid mx-auto d-block" />
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


