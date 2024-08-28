import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { LinkDropdown } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { selectschool, LinksFromType, LinksFromLink, LinksFromDescription } from '../../../../utils/Constant'
import ButtonSection from '../../SchoolCreate/SchoolButtonSection'

const EditLinkForm = () => {
  return (
<div>
       <Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{selectschool}</Label>
              </Col>
              <Col sm="8">
                <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup>
         
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{LinksFromType}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"School Fees "} />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{LinksFromLink}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"http://bitly.com/ret_21"} />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{LinksFromDescription}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"To Collect School Fees"}/>
              </Col>
            </Row>
          </FormGroup>


          </Col>
      </Row>
      <ButtonSection />
    </Form>
    </div>  )
}

export default EditLinkForm