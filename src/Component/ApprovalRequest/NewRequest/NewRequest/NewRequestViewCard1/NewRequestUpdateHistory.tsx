import React from 'react'
import { Badge, Col, Media, Row } from 'reactstrap'
import { Btn, H4, P,Image } from '../../../../../AbstractElements'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, Href, VRStatus, VRDescription } from '../../../../../utils/Constant'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'

const NewRequestUpdateHistory = () => {
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
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{TypeOfRequest}</div>
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
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
            </div>
          </Col>

          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created On</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created By</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport Head"}</div>
            </div>
          </Col>

        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <NewRequestCardImage />
              </div>
            </div>
          </Col>
          <Col md="12" xl="6">
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


    </Col><H4 className="text-success my-3    ">{"History"}</H4>
        <div className='offset-sm-10'>
          <Link to={ `${process.env.PUBLIC_URL}/approvalrequest/viewrequestuploadquote`}>
        <Btn className='btn btn-primary btn-sm'>{"Upload Quotes"}</Btn></Link>  
        </div>
    <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Shankar</H4>
                <P>Admin Office</P>
              </Media>
            </Media>
              </Col>
              <Col md="6">
              <div className="text-md-end mt-4" id="project">
                  <span>15-07-2024 3:30 PM</span>
                </div>
              </Col>
                <P className='ms-5'>
                  In order to ensure the safety and reliability of school transportation, it is essential to establish clear guidelines for the selection and maintenance of tires used in school vehicles.Bus no:6656 Need to change the tyre.                    </P>
           
            <hr />
            <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Rahul</H4>
                <P>Me (Transport Head)</P>
              </Media>
            </Media>
              </Col>
              <Col md="6">
              <div className="text-md-end mt-4" id="project">
                  <span>16-07-2024 4:30 PM</span>
                </div>
              </Col>
                <P className='ms-5'>
                Approved By School head <i className="fa fa-check"></i></P>
           
        </Row>
      </div></>
        
      )
}

export default NewRequestUpdateHistory