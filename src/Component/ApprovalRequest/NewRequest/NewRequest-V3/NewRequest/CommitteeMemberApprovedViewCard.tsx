import React, { useState } from 'react'
import { Badge, Card, CardBody, Col, Collapse, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Btn, H4, P, UL, Image } from '../../../../../AbstractElements'
import { Chetpet, Department, VRPriority, TypeOfRequest, Budget, DueDate, VRDescription, VRStatus, VRStatusWithDate } from '../../../../../utils/Constant'
import NewRequestCardImage from '../../NewRequest/NewRequestViewCard/NewRequestCardImage'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Service'

const CommitteeMemberApprovedViewCard = () => {
  const [isOpenApprove, setIsOpenApprove] = useState<boolean>(false);
  const approveToggle = () => {
    setIsOpenApprove(!isOpenApprove); setIsOpenHold(false); setIsOpenCancel(false); setIsOpenNeedMoreInfo(false);
  }
  const [isOpenHold, setIsOpenHold] = useState<boolean>(false);
  const holdToggle = () => {
    setIsOpenApprove(false); setIsOpenHold(!isOpenHold); setIsOpenCancel(false); setIsOpenNeedMoreInfo(false);
  }
  const [isOpenCancel, setIsOpenCancel] = useState<boolean>(false);
  const cancelToggle = () => {
    setIsOpenApprove(false); setIsOpenHold(false); setIsOpenCancel(!isOpenCancel); setIsOpenNeedMoreInfo(false);
  }
  const [isOpenNeedMoreInfo, setIsOpenNeedMoreInfo] = useState<boolean>(false);
  const needMoreInfoToggle = () => {
    setIsOpenApprove(false); setIsOpenHold(false); setIsOpenCancel(false); setIsOpenNeedMoreInfo(!isOpenNeedMoreInfo);
  }

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
                <div className="card-wrapper border border-warning rounded-3 text-warning">
                  {"Waiting For Po"}
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Col>

      <H4 className="text-success my-3">{"Quotation Details"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <table className="table mt-2 ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Vendor</th>
              <th scope="col">Amount</th>
              <th scope="col" className='w-25'>Description</th>
              <th scope="col" className='w-25'>ETC</th>
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
              <td className=''>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                  {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
              <Link to={Href}>{"Requote"}</Link>
              <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
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
              <td className=''>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                  {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
              <Link to={Href}>{"Requote"}</Link>
              <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
                </UL>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>JK Tyre</td>
              <td>25,000</td>
              <td>JK Tyre offers a range of sizes suitable for various types of buses, including city buses, coaches, and long-haul buses.</td>
              <td>11-07-2024</td>
              <td>
                <UL className="action simple-list flex-row gap-3">
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                  {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
              <Link to={Href}>{"Requote"}</Link>
              <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
                </UL>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H4 className="text-success my-3">{"Approval Details"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <table className="table mt-2 ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Committee Member</th>
              <th scope="col">Quotation</th>
              <th scope="col">Decision</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sundar</td>
              <td><i className="fa fa-file-pdf-o"></i> JKTyre.pdf</td>
              <td>
                <Badge color='primary' className='rounded-5 sm'>{"Selected"}</Badge>
              </td>
              <td>The price is less compare to other dealers</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bala</td>
              <td><i className="fa fa-file-pdf-o"></i> MRFTyre.pdf</td>
              <td>
              <Badge color='warning' className='rounded-5 sm'>{"Requoted"}</Badge>
              </td>
              <td>The cost was high.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Siva</td>
              <td><i className="fa fa-file-pdf-o"></i> ApolloTyre.pdf</td>
              <td>
              <Badge color='danger' className='rounded-5 sm'>{"Cancelled"}</Badge>
              </td>
              <td>ETC is late</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row>
        <Col className='d-flex gap-2 mt-3 offset-sm-7'>
          <Btn color='info' onClick={needMoreInfoToggle}  >{"Need More Info"}</Btn>
          {/* <Btn color='success' onClick={approveToggle} >{"Confirm"}</Btn> */}
          <Btn color='warning' onClick={holdToggle}>{"Hold"}</Btn>
          <Btn color='danger' onClick={cancelToggle}>{"Cancel This Request"}</Btn>
        </Col>
      </Row>

      <Col md="12" sm="12">
        <CardBody>
          <P className="common-flex">
          </P>
          <Collapse isOpen={isOpenApprove}>
            <Card className="light-accordion">
              <CardBody>
                <Form className="g-3">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label >{"Comments"}</Label>
                        <Input type="textarea" name="approve" />
                      </FormGroup>
                    </Col>
                    <Col className='offset-sm-8 d-flex gap-1'>
                      <Link to={`${process.env.PUBLIC_URL}/approvalrequest/quotedrequest`}>
                        <Btn color="success" >{"Confirm This Request"}</Btn>
                      </Link>
                      <Btn color="light" onClick={approveToggle}>{"Cancel"}</Btn>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpenNeedMoreInfo}>
            <Card className="light-accordion">
              <CardBody>
                <Form className="g-3">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label >{"Comments"}</Label>
                        <Input type="textarea" name="approve" />
                      </FormGroup>
                    </Col>
                    <Col className='offset-sm-8 d-flex gap-1'>
                      <Btn color="info" onClick={needMoreInfoToggle} >{"Need More Info"}</Btn>
                      <Btn color="light" onClick={needMoreInfoToggle}>{"Cancel"}</Btn>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpenHold}>
            <Card className="light-accordion">
              <CardBody>
                <Form className="g-3">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label >{"Comments"}</Label>
                        <Input type="textarea" name="firstName" />
                      </FormGroup>
                    </Col>
                    <Col className='offset-sm-8 d-flex gap-1'>
                      <Btn color="warning" onClick={holdToggle}>{"Hold This Request"}</Btn>
                      <Btn color="light" onClick={holdToggle}>{"Cancel"}</Btn>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpenCancel}>
            <Card className="light-accordion">
              <CardBody>
                <Form className="g-3">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label >{"Comments"}</Label>
                        <Input type="textarea" name="firstName" />
                      </FormGroup>
                    </Col>
                    <Col className='offset-sm-8 d-flex gap-1'>
                      <Btn color="danger" onClick={cancelToggle}>{"Cancel This Request"}</Btn>
                      <Btn color="light" onClick={cancelToggle}>{"Cancel"}</Btn>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Col>


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
      </div>
    </>

  )

}

export default CommitteeMemberApprovedViewCard