import React, { Component } from 'react';

class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-app-gradient">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center title text-white mb-5">
                                    <p className="text-uppercase mb-2 f-13 subtitle">Subscribe</p>
                                    <h3>Be engaged Newsletter</h3>
                                    <p className="text-light">It is a long established fact that a reader will be distracted by the readable content of a page when at its layout</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="subscribe">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control" placeholder="Enter your E-mail address" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div>
                                                    <button type="submit" className="btn btn-custom-white">Subscribe Us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Subscribe;


