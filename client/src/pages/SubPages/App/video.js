import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';

class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
              <section className="section bg-app-gradient">
            <div className="container">
                <Row className="justify-content-center">
                    <Col lg="8">
                        <div>
                            <div className="app-watch-video title text-center">
                                <h3 className="text-white mb-4">Watch a Demo Video</h3>
                                <p className="text-white-50 f-16 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <Link to="#" onClick={this.openModal}  className="video-play-icon"><i className="mdi mdi-play play-icon mr-2 h4"></i></Link>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
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

export default Video;


