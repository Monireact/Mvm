import React, { useState } from 'react'
import { Budget, Chetpet, Department, DueDate, Href, LinkWithHref, ProjectDescription, TypeOfRequest, VRDescription, VRPriority, VRStatus } from '../../../../../utils/Constant'
import { Btn, H4, H6, P, Image } from '../../../../../AbstractElements'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'
import { Row, Col, Media, Button, Card, CardBody, Collapse, Form, FormGroup, Input, Label, Badge } from 'reactstrap'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'

const NewRequestMoreInfoRequest = () => {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const toggle = () => setIsOpen(!isOpen);
    return (

        <><Col md="12" xl="12">
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <Row className="g-3">
                    <Col md="12" xl="6">
                        <div className="form-group row">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
                        </div>
                    </Col>
                    <Col md="12" xl="6">
                        <div className="form-group row">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
                        </div>
                    </Col>
                </Row>

                <Row className="g-3">
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"> Budget</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Budget}</div>
                        </div>
                    </Col>
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{TypeOfRequest}</div>
                        </div>
                    </Col>
                </Row>

                <Row className="g-3">
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
                        </div>
                    </Col>
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
                        </div>
                    </Col>

                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created On</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
                        </div>
                    </Col>
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created By</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport Head"}</div>
                        </div>
                    </Col>

                </Row>
                <Row className="g-3">
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                                <NewRequestCardImage />
                            </div>
                        </div>
                    </Col>
                    <Col md="12" xl="6">
                        <div className="form-group row mt-3">
                            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                                <Badge color="secondary">{VRStatus}</Badge>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Col md="12" xl="12">
                    <div className="form-group row mt-3">
                        <label className="col-sm-6">Description</label>
                        <div className="col-sm-10">{VRDescription}</div>
                    </div>
                </Col>
                    <Col className='offset-sm-9 my-3'>
                        <Btn color="info" onClick={toggle}>{"Need More Info"}</Btn>
                    </Col>
                    <Col md="12" sm="12">
                        {/* <CardHeaderCommon title={CollapseAccordions} span={accordionCollapse} /> */}
                        <CardBody>
                            <P className="common-flex">
                            </P>
                            <Collapse isOpen={isOpen}>
                                <Card className="light-accordion">
                                    <CardBody>
                                        <Form className="g-3">
                                            <Row>
                                                <Col sm="12">
                                                    <FormGroup>
                                                        <Label >{"Comments"}</Label>
                                                        <Input type="textarea" name="firstName" />
                                                    </FormGroup>
                                                </Col>
                                                <Col className='offset-sm-9 d-flex gap-1'>
                                                    <Btn color="primary">{"Save"}</Btn>
                                                    <Btn color="light">{"Cancel"}</Btn>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </CardBody>
                    </Col>
            </div>
        </Col>
            {/*  More info for request history */}
            {/* <Row>
                <Col>
            <H4 className="text-success my-3    ">{"History"}</H4>
                </Col>
            </Row>
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <Row>
                    <Col md="6" className='mt-2'>
                        <Media>
                            <div className="media-left">
                                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
                            </div>
                            <Media body className="m-l-20">
                                <H4 className="media-heading">Shankar</H4>
                                <P>Admin Office
                                    <br />
                                </P>
                            </Media>
                        </Media>
                    </Col>
                    <Col md="6" >
                    <div className="text-md-end mt-4" id="project">
                        <P>15-07-2024 3:30 PM</P>
                    </div>
                    </Col>
                                <P className='ms-5 mt-3'>
                                In order to ensure the safety and reliability of school transportation, it is essential to establish clear guidelines for the selection and maintenance of tires used in school vehicles.Bus no:6656 Need to change the tyre.                    </P>

                </Row>
            </div> */}
        </>

    )
}

export default NewRequestMoreInfoRequest