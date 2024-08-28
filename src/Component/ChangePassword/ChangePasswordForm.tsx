import React from 'react'
import { Row, Col, Form, Label, Input, FormGroup } from 'reactstrap'
import { Add, Cancel, ConfirmPassword, EnterConfirmPassword, EnterNewPassword, Href, NewPassword } from '../../utils/Constant'
import { Link } from 'react-router-dom'
import { Btn } from '../../AbstractElements'

const ChangePasswordForm = () => {
    return (
        <Form className=''>
            <Row>
                <Col className="col-md-8 offset-sm-1 " >
                    <FormGroup>
                        <Row>
                            <Col sm="4">
                                <Label>{NewPassword}</Label>
                            </Col>
                            <Col sm="8">
                                <Input type='text' className='form-control' name='newpassword' placeholder={EnterNewPassword} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm="4">
                                <Label>{ConfirmPassword}</Label>
                            </Col>
                            <Col sm="8">
                                <Input type='text' className='form-control' name='newpassword' placeholder={EnterConfirmPassword} />
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
                    <div className="text-end offset-sm-7">
                        <Link to={Href}>
                            <Btn color="primary" className="me-2">{Add}</Btn>
                        </Link>
                        <Link to={Href}>
                            <Btn color="light">{Cancel}</Btn>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default ChangePasswordForm