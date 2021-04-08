import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import google_play from '../../../images/google-play.png';
import apple_store from '../../../images/apple_store.png';
import iphone from '../../../images/iphone.png';

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
                <Row className="justify-content-center">
                    <Col lg="7">
                        <div className="title text-center mb-5">
                            <p className="text-uppercase text-muted mb-2 f-13 subtitle">Features</p>
                            <h3>Simple App</h3>
                            <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="vertical-content">
                    <Col lg="7">
                        <div>
                            <h5 className="mb-4">Create Something Totally Amazing</h5>
                            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="pt-3">
                                <p className="text-muted"><i className="mdi mdi-checkbox-marked-circle-outline mr-2 text-custom"></i>It is a long established fact that a reader will be distracted.</p>
                                <p className="text-muted"><i className="mdi mdi-checkbox-marked-circle-outline mr-2 text-custom"></i>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <p className="text-muted"><i className="mdi mdi-checkbox-marked-circle-outline mr-2 text-custom"></i>There are many variations of passages of Lorem Ipsum available.</p>
                            </div>
                            <div className="pt-4">
                                <Link className="mr-2" to="#">
                                    <img src={google_play} alt="img" height="48" />
                                </Link>
                                <Link className="" to="#">
                                    <img src={apple_store} alt="img" height="48" />
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" className="offset-lg-1">
                        <div>
                            <img src={iphone} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;


