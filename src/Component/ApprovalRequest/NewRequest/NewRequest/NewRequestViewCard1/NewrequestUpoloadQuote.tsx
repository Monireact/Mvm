import React, { useState } from 'react'
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { LinkDropdown } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { Link } from 'react-router-dom'

const NewrequestUpoloadQuote = () => {
    const [selectedOption, SetSelectedOption] = useState(null)

    const handleSelect = (option: any) => {
        SetSelectedOption(option);
    };
    return (


        <>
            <Row className='mt-3'>
                <Col>
                    <label className="control-label col-xl-3">Select Vendor</label>
                </Col>
                <Col xl="12">
                    <Input type='select' className="input-air-primary digits" defaultValue={"-Select-"} onChange={(e) => handleSelect(e.target.value)}>
                        {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                    </Input>
                </Col>
            </Row>
            {selectedOption && (
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
                    </Row><Row>
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
                    <Form className="g-3">
                        <Row>
                            <Col sm="6">
                                <FormGroup>
                                    <Label>{"ETC"}</Label>
                                    <Input type="text" name="firstName" />
                                </FormGroup>
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Label>{"Description"}</Label>
                                    <Input type="textarea" name="firstName" />
                                </FormGroup>
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Label>{"Amount"}</Label>
                                    <Input type="text" name="firstName" />
                                </FormGroup>
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Label>{"upload"}</Label>
                                    <Input type="file" name="firstName" />
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label>{"Comments"}</Label>
                                    <Input type="textarea" name="firstName" />
                                </FormGroup>
                            </Col>
                            <Col className='offset-sm-8 d-flex gap-1'>
                                <Link to={`${process.env.PUBLIC_URL}/approvalrequest/uploadquote`}>
                                    <Btn color="primary">{"Submit Quote"}</Btn>
                                </Link>
                                <Btn color="light">{"Cancel"}</Btn>
                            </Col>
                        </Row>
                    </Form>
                </>

            )}
        </>
    )
}

export default NewrequestUpoloadQuote