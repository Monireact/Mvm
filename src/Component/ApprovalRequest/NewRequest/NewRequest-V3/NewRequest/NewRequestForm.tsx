import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label} from 'reactstrap'
import {RaiseRequestImage, RaiserequestsApproximateBudget, RaiseRequestDate, RaiseRequestDescription,RaiserequestsHigh, RaiserequestsLow, RaiserequestsMedium, RaiserequestsPriority, Tags, MDepartments, RaiserequestRequest, School, Description, Add, Cancel } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../../AbstractElements'
import { LinkDropdown, departmentdropdown, categorydropdown } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import NewRequestMultiSelector from '../../NewRequest/NewRequestMultiSelector'

const NewRequestForm = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
        <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{School}</Label>
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
                <Label>{MDepartments}</Label>
              </Col>
              <Col sm="8">
                <Input type='select' className="input-air-primary digits" defaultValue={"Select Department"}>
                  {departmentdropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Category"}</Label>
              </Col>
              <Col sm="8">
                <Input type='select' className="input-air-primary digits" defaultValue={"Select Category"}>
                  {categorydropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Created By"}</Label>
              </Col>
              <Col sm="8">
              <Input type="text" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Created Date"}</Label>
              </Col>
              <Col sm="8">
              <Input type="text" className="form-control" />
              </Col>
            </Row>
          </FormGroup> */}

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{RaiserequestRequest}</Label>
              </Col>
              <Col sm="8">
              <Input type='text' className="form-control" >
                </Input>              
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{RaiseRequestDescription}</Label>
              </Col>
              <Col sm="8">
                <Input type="textarea" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="d-flex gap-2 checkbox-checked">
            <Col sm="4">
              <Label> {RaiserequestsPriority} </Label>
            </Col>
            <Col sm="8" className='d-flex gap-3'>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestsLow" type="radio" name="RaiserequestsPriority" />
                <Label className="form-check-label mb-0" for='RaiserequestsLow'>{RaiserequestsLow}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestsMedium" type="radio" name="RaiserequestsPriority"  />
                <Label className="form-check-label mb-0" for='RaiserequestsMedium'>{RaiserequestsMedium}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestsHigh" type="radio" name="RaiserequestsPriority"  />
                <Label className="form-check-label mb-0" for='RaiserequestsHigh'>{RaiserequestsHigh}</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{RaiserequestsApproximateBudget}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup className="d-flex gap-3 checkbox-checked">
            <Col sm="4">
              <Label> {RaiserequestsApproximateBudget} </Label>
            </Col>
            <Col sm="8" className='d-flex gap-2'>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" />
                <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{RaiserequestsBasic}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget"  />
                <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{Raiserequestintermediate}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="RaiserequestAdvance" type="radio" name="RaiserequestsApproximateBudget"  />
                <Label className="form-check-label mb-0" for='RaiserequestAdvance'>{RaiserequestAdvance}</Label>
              </FormGroup>
            </Col>
          </FormGroup> */}
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{RaiseRequestDate}</Label>
              </Col>
              <Col sm="8">
                <Input type="date" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Last Update Date"}</Label>
              </Col>
              <Col sm="8">
              <Input type="text" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{"Last Update By"}</Label>
              </Col>
              <Col sm="8">
              <Input type="text" className="form-control" />
              </Col>
            </Row>
          </FormGroup> */}
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{RaiseRequestImage}</Label>
              </Col>
              <Col sm="8">
                <Input type="file" className="form-control" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Tags}</Label>
              </Col>
              <Col sm="8">
              <NewRequestMultiSelector/>
              </Col>
            </Row>
          </FormGroup>
        </Col>
        <Row className="justify-content-center">
      <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
        <div className="text-end offset-sm-1">
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequest`}>
          <Btn color="primary" className="me-3">{Add}</Btn>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequest`}>
            <Btn color="light">{Cancel}</Btn>
          </Link>
        </div>
      </Col>
    </Row>      
  </Row>
    </Form>
  )
}

export default NewRequestForm