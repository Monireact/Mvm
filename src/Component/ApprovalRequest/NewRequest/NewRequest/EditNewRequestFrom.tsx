import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { departmentdropdown, LinkDropdown, SchoolName } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { RaiseRequestRequestId, selectschool, RaiserequestsApproximateBudget, RaiserequestsBasic, Raiserequestintermediate, RaiserequestAdvance, RaiserequestRequest, RaiseRequestDescription, RaiseRequestDate, RaiserequestsPriority, RaiserequestsLow, RaiserequestsMedium, RaiserequestsHigh, RaiseRequestImage, MTags, Budget, Chetpet, Department, DueDate, Href, TypeOfRequest, VRDescription, VRPriority, VRStatus } from '../../../../utils/Constant'
import { Tags } from '../../../Masters/Tags'
  import NewRequestMultiSelector from './NewRequestMultiSelector'
import { Badges, Btn, Image } from '../../../../AbstractElements'
import NewRequestCardImage from './NewRequestViewCard/NewRequestCardImage'
import { dynamicImage } from '../../../../Service'
import { ref } from 'yup'
import { roundedContext } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../../../Ui-Kits/TagAndPills/Common/CommonTagAndPillsCardBody'
import { Mail } from 'react-feather'
import NewRequestButtonSection from './NewRequestButtonSection'

const EditNewRequestContainer = () => {
  return (
    <><div className="card-wrapper border rounded-3 checkbox-checked">
      <Form className="theme-form">
        <Row>
          <Col md="8 offset-md-1">
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{"Select Department"}</Label>
                </Col>
                <Col sm="8">
                  <Input type="text" className="form-control" value={"Transport"} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{selectschool}</Label>
                </Col>
                <Col sm="8">
                  <Input type="text" className="form-control" value={"Chetpet"} />
                </Col>
                
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{RaiserequestsApproximateBudget}</Label>
                </Col>
                <Col sm="8">
                  <Input type="text" className="form-control" value={"17,000"} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{RaiserequestRequest}</Label>
                </Col>
                <Col sm="8">
                  <Input type="text" className="form-control" value={"Bus Front tyre Change"} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{RaiseRequestDescription}</Label>
                </Col>
                <Col sm="8">
                  <Input type="textarea" className="form-control" value={"In order to ensure the safety and reliability of school transportation, it is essential to establish clear guidelines for the selection and maintenance of tires used in school vehicles.Bus no:6656 Need to change the tyre."} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{RaiseRequestDate}</Label>
                </Col>
                <Col sm="8">
                  <Input type="text" className="form-control" value={"17-07-2024"} />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="d-flex gap-2 ">
              <Col sm="4">
                <Label> {RaiserequestsPriority} </Label>
              </Col>
              <Col sm="8" className="d-flex gap-3">
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsLow" type="radio" name="Priority" />
                  <Label className="form-check-label mb-0" for='RaiserequestsLow'>{RaiserequestsLow}</Label>
                </FormGroup>
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsMedium" type="radio" name="Priority" checked />
                  <Label className="form-check-label mb-0" for='RaiserequestsMedium'>{RaiserequestsMedium}</Label>
                </FormGroup>
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsHigh" type="radio" name="Priority" />
                  <Label className="form-check-label mb-0" for='RaiserequestsHigh'>{RaiserequestsHigh}</Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{RaiseRequestImage}</Label>
                </Col>
                <Col sm="8">
                  <img className="border rounded "  src={dynamicImage("other-images/tyre-img-1.jpeg")} alt="thumbnail"/>
                  <Badges color="danger" className="cross-circle">×</Badges>
                  <img className="border rounded"  src={dynamicImage("other-images/tyre-img-2.jpeg")} alt="thumbnail" />
                  <Badges color="danger" className="cross-circle">×</Badges>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>{MTags}</Label>
                </Col>
                <Col sm="8">
                  <NewRequestMultiSelector />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <NewRequestButtonSection />
      </Form>
    </div></>
  )
}

export default EditNewRequestContainer