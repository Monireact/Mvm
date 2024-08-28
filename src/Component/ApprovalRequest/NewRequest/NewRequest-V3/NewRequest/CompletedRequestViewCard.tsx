import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Badge, Media } from 'reactstrap'
import { H4, UL, P, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Chetpet, Department, VRPriority, Budget, DueDate, VRDescription, Href } from '../../../../../utils/Constant'
import NewRequestCardImage from '../../NewRequest/NewRequestViewCard/NewRequestCardImage'
import StatusUpdateModal from './StatusUpdateModal'

const CompletedRequestViewCard = () => {
  return (
    <>
      <Col md="12" xl="12">
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Category</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport"}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-2 ">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-2 ">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Bus Front Tyre Change"}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Approximate Budget</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">₹ {Budget}</div>
              </div>

            </Col>
          </Row>
          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created Date</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
              </div>
            </Col>
          </Row>
          <Row className=" form-group row mt-2">
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                  <NewRequestCardImage />
                </div>
              </div>
            </Col>
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Tags</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport"}</div>
              </div>
            </Col>
          </Row>

          <Col md="12" xl="12">
            <div className="form-group row mt-2">
              <label className="col-sm-6">Description</label>
              <div className="col-sm-10">{VRDescription}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2 ">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <div className="card-wrapper border border-success rounded-3 text-success">
                  {"Compeleted"}
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Col>

      <H4 className="text-success my-3">{"status"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Suresh</H4>
                <P>Transport Head</P>
                <P>Status: <Badge color='success' className='rounded-5'>Completed</Badge> </P>
                <P>Description: I have received new tyre and changed. </P>
                <div className="media-left">
                    <Image src="../assets/images/other-images/tyre-img-3.jpg" alt="Example Image" className='img-width' />
                </div>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>15-07-2024 3:30 PM</span>
            </div>
          </Col>
        </Row>
      </div>

      <H4 className="text-success my-3">{"PO Details"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <table className="table mt-2 ">
          <thead>
            <tr>
              <th scope="col">Vendor Name</th>
              <th scope="col">PO Number</th>
              <th scope="col" className='w-25'>Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apollo Tyre</td>
              <td>PO112</td>
              <td>Apollo bus tires are available in various sizes to fit different types of buses, from city buses to coaches and long-haul buses.</td>
              <td>15,000</td>
              <td>Issued</td>
              <td className=''>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/waitingforpoissued`}><i className="fa fa-eye"></i></Link>
                </UL>
              </td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>

      <Row>
        <Col>  <H4 className="text-success my-3">{"Quotation Details"}</H4>
        </Col>
        {/* <Col className='mt-2 offset-sm-7'><StatusUpdateModal/></Col> */}
      </Row>

      <div className="card-wrapper border rounded-3 checkbox-checked">
        <table className="table mt-2 ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Vendor</th>
              <th scope="col">Amount</th>
              <th scope="col" className='w-25'>Description</th>
              <th scope="col" className='w-25'>ETC</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Apollo Tyre</td>
              <td>15,000</td>
              <td>Apollo bus tires are available in various sizes to fit different types of buses, from city buses to coaches and long-haul buses.</td>
              <td>12-07-2024</td>
              <td><Badge color="success" className="rounded-5">Selected</Badge></td>
              <td className=''>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}><i className="fa fa-eye"></i></Link>
                  <Link to={Href}><i className="fa fa-download" ></i></Link>
                </UL>
              </td>
            </tr>
            <tr>
            </tr>
            <tr>
              <td>2</td>
              <td>MRF Tyres</td>
              <td>20,000</td>
              <td>MRF bus tires come in various sizes to fit different types of buses, including city buses, coaches, and long-haul buses.</td>
              <td>13-07-2024</td>
              <td className='text-center'>-</td>
              <td className=''>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}><i className="fa fa-eye" ></i></Link>
                  <Link to={Href}><i className="fa fa-download" ></i></Link>
                </UL>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>JK Tyre</td>
              <td>25,000</td>
              <td>JK Tyre offers a range of sizes suitable for various types of buses, including city buses, coaches, and long-haul buses.</td>
              <td>11-07-2024</td>
              <td className='text-center'>-</td>
              <td>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}><i className="fa fa-eye"></i></Link>
                  <Link to={Href}><i className="fa fa-download" ></i></Link>
                </UL>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H4 className="text-success my-3">{"History"}</H4>
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
          <P className='media-description'>Request Approved</P>
          <hr />
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">suresh</H4>
                <P>Transport Head</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>15-07-2024 3:30 PM</span>
            </div>
          </Col>
          <P className='media-description'>
            <Image src="../assets/images/other-images/bus-puncture-img-1.jpeg" alt="Example Image" className='img-width' />
          </P>
          <P className='media-description'>
            Transport Head:Need to change Bus tyre
          </P>
          <hr />
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
          <P className='media-description'>More Info requested</P>
          <hr />
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading">Suresh</H4>
                <P>Transport Head</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>16-07-2024 4:30 PM</span>
            </div>
          </Col>
          <P className='media-description'>
            Requested New Bus front Tyre</P>

        </Row>
      </div></>)
}

export default CompletedRequestViewCard