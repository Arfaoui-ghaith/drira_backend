import React, { Component } from 'react';

class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="title text-center mb-5">
                            <p className="text-uppercase text-muted mb-2 f-13 subtitle">Testimonial</p>
                            <h3>What clients Say</h3>
                            <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testi-startup p-4 bg-white mt-4">
                            <div className="testi-icon">
                                <i className="mdi mdi-format-quote-open display-3"></i>
                            </div>
                            <p className="text-muted mb-4">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. </p>
                            <div className="text-right">
                                <h5 className="f-14"> - Mathew Herbert</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testi-startup p-4 bg-white mt-4">
                            <div className="testi-icon">
                                <i className="mdi mdi-format-quote-open display-3"></i>
                            </div>
                            <p className="text-muted mb-4">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical cambridge.</p>
                            <div className="text-right">
                                <h5 className="f-14"> - Marcel Knight</h5>
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

export default Testimonial;


