import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label } from 'reactstrap'
import RolesAddBtn from '../RolesEdit/RolesAddBtn'

const CreateNewRolesForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col md="12 offset-md-1">
            <FormGroup>
              <Row>
                <Col sm="2">
                  <Label>{"RoleCode"}</Label>
                </Col>
                <Col sm="5">
                  <Input type="text" placeholder='Enter the role code'/>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="2">
                  <Label>{"RoleName"}</Label>
                </Col>
                <Col sm="5">
                  <Input type="text" placeholder='Enter the role name'/>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm="2">
                  <Label>{"Description"}</Label>
                </Col>
                <Col sm="5">
                  <Input type="textarea" placeholder='Enter the description'/>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Col className='offset-sm-3'>
        <RolesAddBtn />
        </Col>
      </Form>
    </div>
  )
}

export default CreateNewRolesForm