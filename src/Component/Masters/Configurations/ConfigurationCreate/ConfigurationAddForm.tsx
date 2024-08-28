import React from 'react'
import { Row, Col, FormGroup, Label } from 'reactstrap'
import { Add, Cancel } from '../../../../utils/Constant'
import { SchoolList } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { ErrorMessage, Field, Form } from 'formik'
import { AddConfigurationFormValidationsProp } from '../../../../Types/Masters/Department/Departments'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../AbstractElements'

const ConfigurationAddForm: React.FC<AddConfigurationFormValidationsProp> = ({ errors, submitErrors, setSubmitError }) => {
  return (
    <Form className="custom-input">
      <Row>
        <Col md="6 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"School Location"}</Label>
              </Col>
              <Col sm="8">
                <Field as='select' name="schoolname" className={`form-control ${submitErrors && `${errors.schoolname ? "is-invalid" : "is-valid"}`}`} defaultValue={"Select School"}>
                  {SchoolList.map((data, index) => (<option key={index}>{data}</option>))}
                </Field>
                <ErrorMessage name="schoolname" component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Budget"}</Label>
              </Col>
              <Col sm="8">
                <Field type="text" name="budget" className={`form-control ${submitErrors && `${errors.budget ? "is-invalid" : "is-valid"}`}`} placeholder={'Enter the budget'} />
                <ErrorMessage name="budget" component="span" className="invalid-feedback" />
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="justify-content-center">
            <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
              <div className="text-end offset-sm-2">
                <Btn color="primary" type='submit' className="me-3" onClick={() => setSubmitError(true)}>{Add}</Btn>
                <Link to={`${process.env.PUBLIC_URL}/masters/configurations`}>
                  <Btn color="light">{Cancel}</Btn>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>

  )
}

export default ConfigurationAddForm