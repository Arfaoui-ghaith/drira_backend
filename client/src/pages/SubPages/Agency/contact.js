import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Get in touch</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body p-4">
                                    <div className="custom-form">
                                        <div id="message"></div>
                                        <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                            <Row>
                                                <Col lg="12">
                                                    <div className="form-group mb-4">
                                                        <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your Email..." />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Subject..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message..."></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col sm="12" className="text-right">
                                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </Col>
                                            </Row>
                                        </form>
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

export default Contact;


