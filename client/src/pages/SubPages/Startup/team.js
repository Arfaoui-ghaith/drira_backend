import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../images/team/img-1.jpg';
import img2 from '../../../images/team/img-2.jpg';
import img3 from '../../../images/team/img-3.jpg';
import img4 from '../../../images/team/img-4.jpg';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="team">
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
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="startup-team-box mt-4">
                                    <div className="startup-team-img">
                                        <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="startup-team-content text-center pt-3">
                                        <h5 className="f-17"><Link to="#" className="text-white">Kenneth Simpson</Link></h5>
                                        <p className="text-custom f-14">CEO/Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="startup-team-box mt-4">
                                    <div className="startup-team-img">
                                        <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="startup-team-content text-center pt-3">
                                        <h5 className="f-17"><Link to="#" className="text-white">Daniel Malave</Link></h5>
                                        <p className="text-custom f-14">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="startup-team-box mt-4">
                                    <div className="startup-team-img">
                                        <img src={img3} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="startup-team-content text-center pt-3">
                                        <h5 className="f-17"><Link to="#" className="text-white">James Peck</Link></h5>
                                        <p className="text-custom f-14">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="startup-team-box mt-4">
                                    <div className="startup-team-img">
                                        <img src={img4} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="startup-team-content text-center pt-3">
                                        <h5 className="f-17"><Link to="#" className="text-white">Marc Johnson</Link></h5>
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


