import React from 'react'
import { Link } from 'react-feather'
import { Row, Col, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'

const StatusUpdateModalData = () => {
    return (
        <>

            <Form className="g-3">
                <Row>
                    <Col sm="12">
                        <FormGroup>
                            <Label>{"Description"}</Label>
                            <Input type="textarea" name="firstName" />
                        </FormGroup>
                    </Col>
                    <Col sm="12">
                        <FormGroup>
                            <Label>{"Product Image"}</Label>
                            <Input type="file" name="firstName" />
                        </FormGroup>
                    </Col>
                    
                    <Col sm="12">
                        <FormGroup>
                            <Label>{"status"}</Label><br />
                            <Card>
                                <CardBody>
                                    <div className="form-check form-check-inline radio radio-primary" >
                                        <Input type="radio" name="radio5"  />
                                        <Label className="mb-0" check>{"Delay"}</Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary" >
                                        <Input type="radio" name="radio5"  />
                                        <Label className="mb-0" check>{"Cancelled"}</Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary" >
                                        <Input type="radio" name="radio5"  />
                                        <Label className="mb-0" check>{"Hold"}</Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary" >
                                        <Input type="radio" name="radio5"  />
                                        <Label className="mb-0" check>{"Inprogress"}</Label>
                                    </div>
                                    <div className="form-check form-check-inline radio radio-primary" >
                                        <Input type="radio" name="radio5" defaultChecked />
                                        <Label className="mb-0" check>{"Completed"}</Label>
                                    </div>
                                </CardBody>
                            </Card>
                        </FormGroup>
                    </Col>

                </Row>
            </Form>
        </>


    )
}

export default StatusUpdateModalData