import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import about from '../../../images/startup-about.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';


class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">About us</p>
                                    <h3>Promote products and online services without losing the essence of your business</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="startup-about-img">
                                    <img src={about} alt="" className="img-fluid img-thumbnail mx-auto d-block" />
                                </div>
                                <div className="watch-video">
                                    <Link to="#" onClick={this.openModal}  className="video-play-icon text-white text-center">   <i className="mdi mdi-play play-icon play h2 mx-auto"></i></Link>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           

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


