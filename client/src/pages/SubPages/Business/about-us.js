import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Modal Video 
import ModalVideo from 'react-modal-video';
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
             <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="about-content text-center">
                            <p className="text-muted mb-4">EST .1998</p>
                            <h4 className="mx-auto mb-4">A digital web studio creating stunning & engaging online experiences</h4>
                            <p className="text-muted">The Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                            <div className="watch-video mt-5">
                                <Link to="#" onClick={this.openModal}  className="video-play-icon text-dark"><i className="mdi mdi-play play-icon mr-2 h4"></i> <span>Watch The Video!</span></Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           
                            
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


