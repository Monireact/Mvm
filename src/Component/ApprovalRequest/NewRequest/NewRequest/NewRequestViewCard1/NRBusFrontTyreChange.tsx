import React from 'react'
import { Badge, Col, Media, Row } from 'reactstrap'
import { Btn, H4, H6, P, Image } from '../../../../../AbstractElements'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, ImageGallery, VRDescription, VRStatus, Href } from '../../../../../utils/Constant'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'
import { dynamicImage } from '../../../../../Service'

const NewRequestFrontTyreChange = () => {
  return (
    <><Col md="12" xl="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
            </div>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"> Budget</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Budget}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Bus Front Tyre Change"}</div>
            </div>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created On</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <NewRequestCardImage />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="8">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <Badge color="secondary" >{VRStatus}</Badge>
              </div>
            </div>
          </Col>
        </Row>

        <Col md="12" xl="12">
          <div className="form-group row mt-3">
            <label className="col-sm-6">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
          </div>
        </Col>
      </div>


      <H4 className="text-success mt-3">{"History"}</H4>
    </Col><div className="card-wrapper border rounded-3 checkbox-checked mt-3">
        <Row >
          <Col md="4" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Shankar</H4>
                <P>Transport Head
                </P>
              </Media>
            </Media>
          </Col>
          <Col md="8">
            <div className="text-md-end mt-4" id="project">
              <H6>{""}</H6>
              <P>
              15-07-2024 4:35 PM</P>
              </div>
          </Col>

          <div className='ms-5 mt-3'>

          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
              </div>
            </Col>
          </Row>

          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"> Budget</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Budget}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Bus Front Tyre Change"}</div>
              </div>
            </Col>
          </Row>

          <Row className="g-3">
          {/* <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created On</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
              </div>
            </Col> */}
            <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
          <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-3">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                  <NewRequestCardImage />
                </div>
              </div>
            </Col>
          </Row>
          <Col md="12" xl="12">
          <div className="form-group row mt-3">
            <label className="col-sm-6">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
          </div>
        </Col>
          </div>
        </Row>
      </div></>
  )
}

export default NewRequestFrontTyreChange