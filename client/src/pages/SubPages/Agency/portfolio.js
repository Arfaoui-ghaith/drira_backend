import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import img1 from '../../../images/portfolio/img-1.jpg';
import img2 from '../../../images/portfolio/img-2.jpg';
import img3 from '../../../images/portfolio/img-3.jpg';
import img4 from '../../../images/portfolio/img-4.jpg';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDiv: "all"
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="portfolio">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Portfolio</p>
                                    <h3>Simple Portfolio</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content mt-3 mb-3">
                            <Col lg="4">
                                <ul className="col container-filter categories-filter text-center mb-0" id="filter">
                                    <li><Link onClick={() => this.setState({ currentDiv: "all" })}  className={this.state.currentDiv === "all" ? "categories active" : "categories" }>All</Link></li>
                                    <li><Link onClick={() => this.setState({ currentDiv: "branding" })} className={this.state.currentDiv === "branding" ? "categories active" : "categories" } >Branding</Link></li>
                                    <li><Link onClick={() => this.setState({ currentDiv: "designing" })} className={this.state.currentDiv === "designing" ? "categories active" : "categories" } >Designing</Link></li>
                                    <li><Link onClick={() => this.setState({ currentDiv: "development" })} className={this.state.currentDiv === "development" ? "categories active" : "categories" } >Development</Link></li>
                                </ul>
                            </Col>

                            <Col lg="8">
                                <Row className="container-grid projects-wrapper">
                                    {this.state.currentDiv === "development" || this.state.currentDiv ===  "branding" || this.state.currentDiv ===  "all" ?
                                        <Col lg="6" >
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img1} title="">
                                                    <img className="item-container img-fluid mx-auto" src={img1} alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Creative Agency</h5>
                                                            <p className="text-uppercase">Branding, Design, Development</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}

                                 {this.state.currentDiv ===  "development" || this.state.currentDiv ===  "designing" || this.state.currentDiv ===  "all" ?
                                        <Col lg="6">
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img2} title="">
                                                    <img className="item-container img-fluid mx-auto" src={img2} alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Creative Agency</h5>
                                                            <p className="text-uppercase">Branding, Design, Development</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}


                                       {this.state.currentDiv ===  "development" || this.state.currentDiv ===  "branding" || this.state.currentDiv ===  "all" ?
                                        <Col lg="6" >
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img3} title="">
                                                    <img className="item-container img-fluid mx-auto" src={img3} alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Creative Agency</h5>
                                                            <p className="text-uppercase">Branding, Design, Development</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}

                                   {this.state.currentDiv ===  "branding" || this.state.currentDiv ===  "designing"  || this.state.currentDiv ===  "all" ?
                                        <Col lg="6">
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img4} title="">
                                                    <img className="item-container img-fluid mx-auto" src={img4} alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Creative Agency</h5>
                                                            <p className="text-uppercase">Branding, Design, Development</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Portfolio;


