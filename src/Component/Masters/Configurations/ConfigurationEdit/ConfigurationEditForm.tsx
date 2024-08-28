import React from 'react'
import { Row, Col,FormGroup, Label, Input } from 'reactstrap'
import { SchoolName } from '../../../../utils/Constant'
import ConfigurationButtonSection from '../ConfigurationCreate/ConfigurationButtonSection'

const ConfigurationEditForm = () => {
  return (
<>
    <Row>
      <Col md="6 offset-md-2">
        <FormGroup>
          <Row>
            <Col sm="3">
              <Label>{SchoolName}</Label>
            </Col>
            <Col sm="9">
              <Input type="text" value={"Polachery"}/>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm="3">
              <Label>{"Budget"}</Label>
            </Col>
            <Col sm="9">
              <Input type="text" value={"24,500"}/>
            </Col>
          </Row>
        </FormGroup>
        </Col>
        </Row>
        <ConfigurationButtonSection/>
        </>  )
}

export default ConfigurationEditForm