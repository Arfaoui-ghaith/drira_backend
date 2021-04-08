import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';

class DownloadApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-app-gradient">
                    <div className="container">
                        <Row className="row justify-content-center">
                            <Col lg="8">
                                <div className="cta-content text-white text-center">
                                    <h3 className="mb-4">Download App Now</h3>
                                    <p className="text-white-50 f-16">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <div className="pt-3">
                                        <Link to="#" className="btn btn-outline-white m-1">App Store <i className="mdi mdi-apple"></i></Link>
                                        <Link to="#" className="btn btn-outline-white m-1">Windows <i className="mdi mdi-windows"></i></Link>
                                        <Link to="#" className="btn btn-outline-white m-1">Google Play <i className="mdi mdi-google-play"></i></Link>
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


