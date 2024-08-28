import React from 'react'
import { Row, Col, FormGroup, Input, Label } from 'reactstrap'
import { AddDepartmentFormValidationsProp } from '../../../Types/Masters/Department/Departments'
import { Link } from 'react-router-dom'
import { Btn, H6 } from '../../../AbstractElements'
import { Active, Add, Cancel, InActive, SearchStatus } from '../../../utils/Constant'
import { ErrorMessage, Field, Form } from 'formik'
import { basicRadioCheckboxDataList } from '../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const CreateNewDepartmentForm: React.FC<AddDepartmentFormValidationsProp> = ({ errors, submitErrors, setSubmitError }) => {
  return (
    <Form className="custom-input">
      <Row>
        <Col md="7 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="3">
                <label>Department Name</label>
              </Col>
              <Col sm="9">
                <Field type="text" name="departmentname" className={`form-control ${submitErrors && `${errors.departmentname ? "is-invalid" : "is-valid"}`}`} placeholder="Enter the department name" />
                <ErrorMessage name="departmentname" component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
          
          <FormGroup>
            <Row >
              <Col sm="3">
                <Label>Schools </Label>
              </Col>
              <Col sm="9">
                <div className="d-flex flex-wrap gap-2 checkbox-checked card-wrapper ">
                  {basicRadioCheckboxDataList.map(
                    ({ id, text, 
                      // defaultChecked
                     }, index) => (
                      <div className="form-check form-check-inline  checkbox checkbox-dark mb-0" key={index}>
                        <Input id={id} type="checkbox" />
                        <Label check for={id} className="form-check-label">{text}</Label>
                      </div>))}
                </div>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className='mt-2'>
              <Col sm="3">
                <label>Description</label>
              </Col>
              <Col sm="9">
                <Field as="textarea" name="description" className={`form-control  ${submitErrors && `${errors.discription ? "is-invalid" : "is-valid"}`}`} placeholder="Enter the description" />
                <ErrorMessage name="description " component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="d-flex gap-3 checkbox-checked">
            <Col sm="3">
              <Label>{SearchStatus}</Label>
            </Col>
            <Col sm="9" className='d-flex gap-2'>
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
      
      <Col className='mt-3'>
        <Row className="justify-content-center">
          <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
            <div className="text-end offset-sm-1">
              <Btn color="primary" type='submit' className="me-2" onClick={() => setSubmitError(true)}>{Add}</Btn>
              <Link to={`${process.env.PUBLIC_URL}/masters/departments`}>
                <Btn color="light">{Cancel}</Btn>
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      
    </Form >
    
  )
}

export default CreateNewDepartmentForm