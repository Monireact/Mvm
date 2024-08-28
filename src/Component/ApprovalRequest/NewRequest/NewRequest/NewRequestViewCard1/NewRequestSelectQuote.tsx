import React from 'react'
import { Row, Col, Media, Badge } from 'reactstrap'
import { Btn, H4, P, H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, Href, VRDescription, ProjectDescription } from '../../../../../utils/Constant'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'

const NewRequestSelectQuote = () => {
  return (
    <><Col md="12" xl="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        {/* <H6 className="sub-title">{"View Details"}</H6> */}

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
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"15-07-2024"}</div>
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
                <Badge color="secondary">{"More Info Request"}</Badge>
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
    </Col>
      <div className="card-wrapper border rounded-3 checkbox-checked mt-2">
      <H6 className="text-success">{"History"}</H6>
        <Row>
          <Col md="4" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-60" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Shankar</H4>
                <P>Updated By:Transport Head
                  <br />
                  <span>Updated On:15-07-2024</span>
                </P>
              </Media>
            </Media>
          </Col>
          <Col md="8">
            <div className="text-md-end" id="project">
              <H6>{"Description"}</H6>
              <P>
                In order to ensure the safety and reliability of school transportation, it is essential to establish clear guidelines for the selection and maintenance of tires used in school vehicles.Bus no:6656 Need to change the tyre.                    </P>
            </div>
          </Col>
        </Row>
      </div>
      <div className="card-wrapper border rounded-3 checkbox-checked mt-2">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Vendor</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>JK Tyre</td>
            <td>25,000</td>
            <td>JK Tyre offers a range of sizes suitable for various types of buses, including city buses, coaches, and long-haul buses.
              Common sizes include 295/80R22.5, 315/80R22.5, and other sizes designed for heavy-duty applications.</td>
            <td className=''>
              <Btn color="success">{"Select"}</Btn>
              <Btn color="info">{"Download"}</Btn>
              <Btn color="warning">{"Requote"}</Btn>
              <Btn color="danger">{"Cancel"}</Btn>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>)
}

export default NewRequestSelectQuote