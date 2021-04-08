import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-custom">
                    <div className="container">
                        <div className="row" id="counter">
                            <div className="col-lg-3">
                                <div className="text-center pt-3">
                                    <div className="counter-content text-white">
                                        <h2><span className="counter-value"><CountUp end={1200} /></span> K</h2>
                                        <h5 className="counter-name">Lines Coded</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-center pt-3">
                                    <div className="counter-content text-white">
                                        <h2 className="counter-value" ><CountUp end={2581} /></h2>
                                        <h5 className="counter-name">Working Hours</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-center pt-3">
                                    <div className="counter-content text-white">
                                        <h2 className="counter-value"><CountUp end={6081} /></h2>
                                        <h5 className="counter-name">No. Of Template</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-center pt-3">
                                    <div className="counter-content text-white">
                                        <h2 className="counter-value"><CountUp end={4500} /></h2>
                                        <h5 className="counter-name">No. of Clients</h5>
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

export default Counter;


