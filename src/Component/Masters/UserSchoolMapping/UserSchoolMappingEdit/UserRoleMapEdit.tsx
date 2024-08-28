import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { VendorName, VendorContactPerson, VendorAddress, VendorState, VendorCity, VendorPincode, VendorEmailid, VendorPANNumber, VendorServices, VendorPhoneNumber, VendorGSTNumber, UserRoles, UserRolesSchool, Description, Add, Cancel } from '../../../../utils/Constant'
import ButtonSection from '../../SchoolCreate/SchoolButtonSection'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../AbstractElements'

const UserRoleMapForm = () => {
  return (
<Form className="theme-form">
            <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{UserRoles}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"Departments"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{UserRolesSchool}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"chetpet,trichy"} />
                    </Col>
                  </Row>
                </FormGroup>
              
                <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Description}</Label>
              </Col>
              <Col sm="8">
                <Input type="textarea" value={"Chetpet-IT, Science Trichy-IT"} />
              </Col>
            </Row>
          </FormGroup>
              </Col>
            </Row>
            <Row className="justify-content-center">
      <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
        <div className="text-end offset-sm-1">
        <Link to={`${process.env.PUBLIC_URL}/masters/Users/rolemap`}>
          <Btn color="primary" className="me-3">{"Update"}</Btn>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/masters/Users/rolemap`}>
            <Btn color="light">{Cancel}</Btn>
          </Link>
        </div>
      </Col>
    </Row>
          </Form>  )
}

export default UserRoleMapForm