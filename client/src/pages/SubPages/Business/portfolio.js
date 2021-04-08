import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../images/portfolio/img-1.jpg';
import img2 from '../../../images/portfolio/img-2.jpg';
import img3 from '../../../images/portfolio/img-3.jpg';
import img4 from '../../../images/portfolio/img-4.jpg';
import img5 from '../../../images/portfolio/img-5.jpg';
import img6 from '../../../images/portfolio/img-6.jpg';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDiv: "All"
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="portfolio">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Works</p>
                                    <h3>Recent Portfolio</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="col busi-container-filter categories-filter text-center" id="filter">
                                <li><Link onClick={() => this.setState({ currentDiv: "All" })}  className={this.state.currentDiv === "All" ? "categories active" : "categories" }>All</Link></li>
                                <li><Link onClick={() => this.setState({ currentDiv: "Branding" })} className={this.state.currentDiv === "Branding" ? "categories active" : "categories" }>Branding</Link></li>
                                <li><Link onClick={() => this.setState({ currentDiv: "Designing" })} className={this.state.currentDiv === "Designing" ? "categories active" : "categories" }>Designing</Link></li>
                                <li><Link onClick={() => this.setState({ currentDiv: "Photography" })} className={this.state.currentDiv === "Photography" ? "categories active" : "categories" }>Photography</Link></li>
                                <li><Link onClick={() => this.setState({ currentDiv: "Development" })} className={this.state.currentDiv === "Development" ? "categories active" : "categories" }>Development</Link></li>
                            </ul>
                        </div>
                        <div className="row container-grid projects-wrapper">

                        {this.state.currentDiv === "All" || this.state.currentDiv === "Branding" || this.state.currentDiv ===  "Designing" || this.state.currentDiv ===  "Development" ?
                         <div className="col-lg-4">
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
                     </div>
                        : null }
                           
                        {this.state.currentDiv === "All" || this.state.currentDiv === "Photography" ?
                            <div className="col-lg-4">
                                <div className="item-box mt-4">
                                    <Link className="mfp-image" to={img2} title="">
                                        <img className="item-container img-fluid mx-auto" src={img2} alt="2" />
                                        <div className="item-mask">
                                            <div className="item-caption text-white text-center">
                                                <div className="mb-4">
                                                    <i className="pe-7s-expand1 h2"></i>
                                                </div>
                                                <h5>Traditional Building</h5>
                                                <p className="text-uppercase">Photo</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            : null }

                     { this.state.currentDiv === "All" || this.state.currentDiv === "Branding" || this.state.currentDiv === "Developing" ?
                            <div className="col-lg-4">
                                <div className="item-box mt-4">
                                    <Link className="mfp-image" to={img3} title="">
                                        <img className="item-container img-fluid mx-auto" src={img3} alt="4" />
                                        <div className="item-mask">
                                            <div className="item-caption text-white text-center">
                                                <div className="mb-4">
                                                    <i className="pe-7s-expand1 h2"></i>
                                                </div>
                                                <h5>Street Photography</h5>
                                                <p className="text-uppercase">Branding, Design, Development</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> : null }

                          { this.state.currentDiv === "All" || this.state.currentDiv === "Designing" || this.state.currentDiv === "Branding"  ?
                             <div className="col-lg-4">
                             <div className="item-box mt-4">
                                 <Link className="mfp-image" to={img4} title="">
                                     <img className="item-container img-fluid mx-auto" src={img4} alt="4" />
                                     <div className="item-mask">
                                         <div className="item-caption text-white text-center">
                                             <div className="mb-4">
                                                 <i className="pe-7s-expand1 h2"></i>
                                             </div>
                                             <h5>Beautiful House</h5>
                                             <p className="text-uppercase">Branding, Design</p>
                                         </div>
                                     </div>
                                 </Link>
                             </div>
                         </div> : null }

                         { this.state.currentDiv === "All" || this.state.currentDiv === "Designing" ?
                            <div className="col-lg-4">
                            <div className="item-box mt-4">
                                <Link className="mfp-image" to={img5} title="">
                                    <img className="item-container img-fluid mx-auto" src={img5} alt="5" />
                                    <div className="item-mask">
                                        <div className="item-caption text-white text-center">
                                            <div className="mb-4">
                                                <i className="pe-7s-expand1 h2"></i>
                                            </div>
                                            <h5>Creative Agency</h5>
                                            <p className="text-uppercase">Branding, Design</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                         </div> : null }

                         { this.state.currentDiv === "All" || this.state.currentDiv === "Photography" ?
                            
                            <div className="col-lg-4">
                                <div className="item-box mt-4">
                                    <Link className="mfp-image" to={img6} title="">
                                        <img className="item-container img-fluid mx-auto" src={img6} alt="1" />
                                        <div className="item-mask">
                                            <div className="item-caption text-white text-center">
                                                <div className="mb-4">
                                                    <i className="pe-7s-expand1 h2"></i>
                                                </div>
                                                <h5>Traditional Building</h5>
                                                <p className="text-uppercase">Photo</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>: null }

                           

                           

                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Portfolio;


