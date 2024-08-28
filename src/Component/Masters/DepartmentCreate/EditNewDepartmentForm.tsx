import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label } from 'reactstrap'
import SimpleCheckbox from '../../Forms/FormsControl/RadioCheckbox/BasicRadioAndCheckbox/SimpleCheckbox'
import DepartmentButtonSection from './DepartmentButtonSection'
import { basicRadioCheckboxDataList } from '../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const EditNewDepartmentForm = () => {
  return (
<Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
          <div className="col-lg-9 col-md-12 mx-auto mt-3">
            <div className="form-group row">
              <label className="control-label col-sm-3">Department Name</label>
              <div className="col-sm-9">
                <input type="text" name="name" className="form-control" value={"IT"}/>
              </div>
            </div>
            {/* <FormGroup>
            <Row >
              <Col sm="3">
                <label>Schools</label>
              </Col>
              <Col sm="9">
                <div className="checkbox-checked card-wrapper ">
                  {basicRadioCheckboxDataList.map(
                    ({ id, text, 
                      // defaultChecked
                     }, index) => (
                      <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                        <Input id={id} type="checkbox" />
                        <Label check for={id}>{text}</Label>
                      </div>))}
                </div>
              </Col>
            </Row>
          </FormGroup> */}
          <FormGroup>
  <Row>
    <Col sm="3">
      <Label>Schools</Label>
    </Col>
    <Col sm="9">
      <div className="d-flex flex-wrap gap-2 checkbox-checked card-wrapper">
        {basicRadioCheckboxDataList.map(({ id, text }, index) => (
          <div className="form-check form-check-inline  checkbox checkbox-dark mb-0 " key={index}>
            <Input id={id} type="checkbox" />
            <Label check for={id} className="form-check-label">
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  </Row>
</FormGroup>
            <Col className='mt-2'>
            <div className="form-group row">
              <label className="control-label col-sm-3">Description</label>
              <div className="col-sm-9">
                <textarea name="name" className="form-control" value={"Create Department and if any correction change hear! "} />
              </div>
            </div>  
            </Col> 
          </div>
        </Col>
      </Row>
      <Col className='mt-2'>
        <DepartmentButtonSection />
      </Col>
    </Form>  )
}

export default EditNewDepartmentForm