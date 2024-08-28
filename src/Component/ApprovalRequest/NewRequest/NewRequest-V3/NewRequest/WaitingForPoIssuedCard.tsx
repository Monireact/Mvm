import React from 'react'
import { Row, Col } from 'reactstrap'

const WaitingForPoIssuedCard = () => {
    return (
        <>
            <Row>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"JK Tyre"}
                        </div>
                    </div>
                </Col><Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"jktyre@support.co.in"}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Address</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"No.12, Anna Nagar, Chennai-28"}
                        </div>
                    </div>
                </Col>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">GST Number</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"29ABCDE1234F1Z5"}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Websit</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"https://www.jktyre.com/"}
                        </div>
                    </div>

                </Col>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">PAN Number</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"THNDH82388"}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Po Released On</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"29-07-2024"}
                        </div>
                    </div>

                </Col>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Po Released By</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Baranidharan"}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Amount</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"17,000"}
                        </div>
                    </div>

                </Col>
                <Col sm-6>
                    <div className="form-group row mt-3">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Download PO</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12"><i className="fa fa-file-pdf-o"> </i>{"porelease1.pdf"}
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default WaitingForPoIssuedCard