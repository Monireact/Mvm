import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { TagName, Description, Add, Cancel, Active, InActive, SearchStatus } from '../../../../utils/Constant'
import { AddTagFormValidationsProp } from '../../../../Types/Masters/Department/Departments'
import { ErrorMessage, Field, Form } from 'formik'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../AbstractElements'

const CreateNewTagsForm: React.FC<AddTagFormValidationsProp> = ({ errors, submitErrors, setSubmitError }) => {
  return (
    <Form className="custom-input">

      <Row>
        <Col md="6 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="3">
                <Label>{TagName}</Label>
              </Col>
              <Col sm="9">
                <Field type="text" name='tagname' className={`form-control ${submitErrors && `${errors.tagname ? "is-invalid" : "is-valid"}`}`} />
                <ErrorMessage name="tagname" component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="3">
                <Label>{Description}</Label>
              </Col>
              <Col sm="9">
                <Field type="text" name='discrition' className={`form-control ${submitErrors && `${errors.discrition ? "is-invalid" : "is-valid"}`}`} />
                <ErrorMessage name="discrition" component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="d-flex gap-3 checkbox-checked">
              <Col sm="4">
                <Label>{SearchStatus}</Label>
              </Col>
              <Col sm="8" className='d-flex gap-2'>
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" checked/>
                  <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{Active}</Label>
                </FormGroup>
                <FormGroup check>
                  <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget"  />
                  <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{InActive}</Label>
                </FormGroup>              
              </Col>
          </FormGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
          <div className="text-end offset-sm-1">
            <Btn color="primary" type='submit' className="me-3" onClick={() => setSubmitError(true)}>{Add}</Btn>
            <Link to={`${process.env.PUBLIC_URL}/masters/tags`}>
              <Btn color="light">{Cancel}</Btn>
            </Link>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateNewTagsForm