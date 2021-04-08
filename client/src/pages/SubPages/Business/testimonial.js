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
                    <div className="col-lg-4">
                        <div className="busi-testi-box bg-white p-4 mt-4">
                            <div className="busi-testi-icon">
                                <i className="mdi mdi-format-quote-open display-3"></i>
                            </div>
                            <h6 className="mb-1">Mathew Herbert</h6>
                            <p className="text-muted f-14"> - Landing page User</p>
                            <p className="text-muted mb-0 pt-2 f-14">The European languages are members of the same family. Their separate existence is a myth. For sport, etc</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="busi-testi-box bg-white p-4 mt-4">
                            <div className="busi-testi-icon">
                                <i className="mdi mdi-format-quote-open display-3"></i>
                            </div>
                            <h6>Daryl Jenkins</h6>
                            <p className="text-muted f-14"> - Landing page User</p>
                            <p className="text-muted mb-0 pt-2 f-14">It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="busi-testi-box bg-white p-4 mt-4">
                            <div className="busi-testi-icon">
                                <i className="mdi mdi-format-quote-open display-3"></i>
                            </div>
                            <h6 className="mb-1">Harry Anderton</h6>
                            <p className="text-muted f-14"> - Landing page User</p>
                            <p className="text-muted mb-0 pt-2 f-14">The Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium laudantium rem aperiam</p>
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


