import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import img1 from '../../../images/team/img-1.jpg';
import img2 from '../../../images/team/img-2.jpg';
import img3 from '../../../images/team/img-3.jpg';
import img4 from '../../../images/team/img-4.jpg';


class DownloadApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Team</p>
                                    <h3>Meet Our Expert</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                                <div className="app-team-box mt-4">
                                    <div className="app-team-box-img">
                                        <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="app-team-overlay">
                                        <div className="app-team-content text-center">
                                            <div className="app-team-name">
                                                <h5 className="f-17"><Link to="#" className="text-white">Kenneth Simpson</Link></h5>
                                                <p className="text-custom f-14">CEO/Founder</p>
                                            </div>
                                            <div className="app-team-social-icon">
                                                <Link to="#" className="m-1"><i className="mdi mdi-facebook"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-twitter"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="app-team-box mt-4">
                                    <div className="app-team-box-img">
                                        <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="app-team-overlay">
                                        <div className="app-team-content text-center">
                                            <div className="app-team-name">
                                                <h5 className="f-17"><Link to="#" className="text-white">Daniel Malave</Link></h5>
                                                <p className="text-custom f-14">Web Developer</p>
                                            </div>
                                            <div className="app-team-social-icon">
                                            <Link to="#" className="m-1"><i className="mdi mdi-facebook"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-twitter"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="app-team-box mt-4">
                                    <div className="app-team-box-img">
                                        <img src={img3} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="app-team-overlay">
                                        <div className="app-team-content text-center">
                                            <div className="app-team-name">
                                                <h5 className="f-17"><Link to="#" className="text-white">James Peck</Link></h5>
                                                <p className="text-custom f-14">Founder</p>
                                            </div>
                                            <div className="app-team-social-icon">
                                            <Link to="#" className="m-1"><i className="mdi mdi-facebook"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-twitter"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="app-team-box mt-4">
                                    <div className="app-team-box-img">
                                        <img src={img4} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="app-team-overlay">
                                        <div className="app-team-content text-center">
                                            <div className="app-team-name">
                                                <h5 className="f-17"><Link to="#" className="text-white">Marc Johnson</Link></h5>
                                                <p className="text-custom f-14">Web Designer</p>
                                            </div>
                                            <div className="app-team-social-icon">
                                            <Link to="#" className="m-1"><i className="mdi mdi-facebook"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-twitter"></i></Link>
                                                <Link to="#" className="m-1"><i className="mdi mdi-instagram"></i></Link>
                                            </div>
                                        </div>
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

export default DownloadApp;


