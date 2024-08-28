import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'

const NewRequestSelectQuoteModalView = () => {
  return (
    <Form className="g-3">
    <Row>
        <Col sm="12">
            <FormGroup>
                <Label >{"Comments"}</Label>
                <Input type="textarea" name="firstName" />
            </FormGroup>
        </Col>
    </Row>
</Form>
      )
}

export default NewRequestSelectQuoteModalView