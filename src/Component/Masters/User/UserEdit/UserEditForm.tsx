import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { UsersName, UsersEmailId, UsersPhoneNumber, UserId, UsersPassword, UsersConfirmPassword, SearchStatus, Active, InActive, Cancel } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../AbstractElements'

const UserEditForm = () => {
  return (
    <>
      <Row className="theme-form">
        <Col md="6 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersName}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"Suresh"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UserId}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"suresh123@gmail.com"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPhoneNumber}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"921457988"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"MVM123"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersConfirmPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"MVM123"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="d-flex gap-3 checkbox-checked">
            <Col sm="4">
              <Label>{SearchStatus}</Label>
            </Col>
            <Col sm="8" className='d-flex gap-2'>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" checked />
                <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{Active}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget" />
                <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{InActive}</Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
          <div className="text-end">
            <Link to={`${process.env.PUBLIC_URL}/user/users`}>
              <Btn color="primary" className="me-3">{"Update"}</Btn>
            </Link>
            <Link to={`${process.env.PUBLIC_URL}/user/users`}>
              <Btn color="light">{Cancel}</Btn>
            </Link> 
          </div>
        </Col>
      </Row>
    </>
  )
}

export default UserEditForm