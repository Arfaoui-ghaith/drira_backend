import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import iphone from '../../../images/iphone.png';

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
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Features</p>
                                    <h3>Key features of the product</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content">
                            <Col lg="4" >
                                <div className="app-features-box app-border-right p-4 bg-white text-right">
                                    <div className="arrow-right"></div>
                                    <div className="app-features-icon mb-3">
                                        <i className="pe-7s-photo h1 text-custom"></i>
                                    </div>
                                    <div className="app-features-content">
                                        <h5 className="f-18">Creative Execution</h5>
                                        <p className="text-muted mb-0">The European languages are members of the same family. Their separate existence is a myth music, sport</p>
                                    </div>
                                </div>

                                <div className="app-features-box app-border-right p-4 bg-white text-right mt-5">
                                    <div className="arrow-right"></div>
                                    <div className="app-features-icon mb-3">
                                        <i className="pe-7s-film h1 text-custom"></i>
                                    </div>
                                    <div className="app-features-content">
                                        <h5 className="f-18">Sky's the limit</h5>
                                        <p className="text-muted mb-0">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div>
                                    <img src={iphone} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="app-features-box app-border-left p-4 bg-white">
                                    <div className="arrow-left"></div>
                                    <div className="app-features-icon mb-3">
                                        <i className="pe-7s-monitor h1 text-custom"></i>
                                    </div>
                                    <div className="app-features-content">
                                        <h5 className="f-18">Big Ideas</h5>
                                        <p className="text-muted mb-0">The languages only differ in their grammar, their and their most common why a new common language</p>
                                    </div>
                                </div>
                                <div className="app-features-box app-border-left p-4 bg-white mt-5">
                                    <div className="arrow-left"></div>
                                    <div className="app-features-icon mb-3">
                                        <i className="pe-7s-notebook h1 text-custom"></i>
                                    </div>
                                    <div className="app-features-content">
                                        <h5 className="f-18">Branding Identity</h5>
                                        <p className="text-muted mb-0">It showed a lady fitted out with a fur hat and boa who sat upright a heavy fur muff that covered the whole.</p>
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

export default Features;


