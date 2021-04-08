import React, { Component } from 'react';

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
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="about-content text-center">
                            <p className="text-muted mb-4">EST .1998</p>
                            <h4 className="mx-auto mb-3">A digital web studio creating stunning & engaging online experiences</h4>
                            <p className="text-muted">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-exapnd2 text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Strategy Solutions</h5>
                                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-share text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Dedicated Support</h5>
                                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <i className="pe-7s-monitor text-custom h1"></i>
                            </div>
                            <div className="about-desc">
                                <h5 className="mb-3 f-18">Digital Design</h5>
                                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
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

export default AboutUs;


