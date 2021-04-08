import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


// Carousel
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import './carousel.css';

import shot1 from "../../../images/app-img/shot-1-alt.png";
import shot2 from "../../../images/app-img/shot-2-alt.png";
import shot3 from "../../../images/app-img/shot-3-alt.png";
import shot4 from "../../../images/app-img/shot-4-alt.png";
import shot5 from "../../../images/app-img/shot-5-alt.png";
import shot6 from "../../../images/app-img/shot-6-alt.png";

const images = [shot1,shot2,shot3,shot4,shot5,shot6];

class ScreenShots extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            photoIndex: 0,
            isFits: false,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: !this.state.open });
    };

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    render() {
        const { photoIndex } = this.state;
        return (
            <React.Fragment>

                {this.state.isFits ?
                    <Lightbox mainSrc={images[photoIndex]}
                        onCloseRequest={() => this.setState({ isFits: false })}
                    /> : null}

                <section className="section" id="appshots">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Screen shots</p>
                                    <h3>App Screen Shots</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <div id="owl-demo-screenshot">
                                    <div  id="customCarousel">
                                    <RBCarousel
                                        version={4}
                                        autoplay={this.state.autoplay}
                                        pauseOnVisibility={true}
                                       
                                        onSelect={this.visiableOnSelect}
                                        slideshowSpeed={2500}>

                                        <div className="item">
                                            <Row style={{ marginBottom : "30px" }}>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 0 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot1} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 1 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot2} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 2 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot3} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 3 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot4} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="item">
                                            <Row style={{ marginBottom : "30px" }}>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link  to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 4 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot5} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link  to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 5 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot6} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link  to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 0 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot3} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="screenshot-item">
                                                        <div className="screenshot-overlayer">
                                                            <Link  to="#" className="mfp-image" onClick={() => this.setState({ isFits: true, photoIndex: 1 })} title="App Screen 1"></Link>
                                                        </div>
                                                        <div className="screenshot-img mb-4">
                                                            <img src={shot4} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </RBCarousel>
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
export default ScreenShots;


