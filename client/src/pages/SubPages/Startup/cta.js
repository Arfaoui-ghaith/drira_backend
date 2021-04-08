import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-sm bg-app-gradient">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <div className="cta-content text-white mb-3">
                                    <h4 className="mb-0 mt-2">Trusted by over 10,000 global businesses. Try Zairo today!</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-md-right">
                                    <Link to="#" className="btn btn-custom">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Cta;


