import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img5 from '../../../images/team/img-5.jpg';
import img6 from '../../../images/team/img-6.jpg';
import img7 from '../../../images/team/img-7.jpg';
import img8 from '../../../images/team/img-8.jpg';

class Team extends Component {

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
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Team</p>
                                    <h3>Meet Our Expert</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3 col-md-6">
                                <div className="busi-team-box bg-white mt-4">
                                    <div className="busi-team-img">
                                        <img src={img5} alt="" className="img-fluid mx-auto d-block rounded-circle" />
                                    </div>
                                    <div className="team-content text-center mt-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Kenneth Simpson</Link></h5>
                                        <p className="text-custom f-14">CEO/Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="busi-team-box mt-4">
                                    <div className="busi-team-img">
                                        <img src={img6} alt="" className="img-fluid mx-auto d-block rounded-circle" />
                                    </div>
                                    <div className="team-content text-center mt-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Daniel Malave</Link></h5>
                                        <p className="text-custom f-14">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="busi-team-box mt-4">
                                    <div className="busi-team-img">
                                        <img src={img7} alt="" className="img-fluid mx-auto d-block rounded-circle" />
                                    </div>
                                    <div className="team-content text-center mt-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">James Peck</Link></h5>
                                        <p className="text-custom f-14">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="busi-team-box mt-4">
                                    <div className="busi-team-img">
                                        <img src={img8} alt="" className="img-fluid mx-auto d-block rounded-circle" />
                                    </div>
                                    <div className="team-content text-center mt-3">
                                        <h5 className="team-name f-17"><Link to="#" className="text-dark">Marc Johnson</Link></h5>
                                        <p className="text-custom f-14">Web Designer</p>
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

export default Team;


