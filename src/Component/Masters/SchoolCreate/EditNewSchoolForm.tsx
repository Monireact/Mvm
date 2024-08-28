import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { EmailId, MobileNumber, SchoolAddress, Logo, SchoolName, RaiseRequestImage } from '../../../utils/Constant'
import ButtonSection from './SchoolButtonSection'
import { SchoolLocation } from '../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { Badges } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'

const EditNewSchoolForm = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"School Name"}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"Maharishi Vidya Mandir Senior Secondary School"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"School Code"}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"CHE"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"School Location"}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"chetpet"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Email Id"}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"chetpet@gmail.com"} />
              </Col>
            </Row>
          </FormGroup>


          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{MobileNumber}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" className="form-control" Value={'952976585'} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{SchoolAddress}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" Value={' Old No. 4, New No. 13, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112'} />
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Logo}</Label>
              </Col>
              <Col sm="8">
                <Input type="file" className="form-control" Value={"logo"} />
              </Col>
            </Row>
          </FormGroup> */}

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Logo"}</Label>
              </Col>
              <Col sm="">
                <Row>
                <Col sm="2">
                    <img className="border rounded" src={dynamicImage("other-images/mvm-favicon.png")} alt="thumbnail" />
                    <Badges color="danger" className='school-edit-cross'>×</Badges>
                  </Col>
                  <Col sm="10" className="d-flex align-items-center">
                    <input type="file" className="form-control" />
                  </Col>
                 
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <ButtonSection />
    </Form>
  )
}

export default EditNewSchoolForm