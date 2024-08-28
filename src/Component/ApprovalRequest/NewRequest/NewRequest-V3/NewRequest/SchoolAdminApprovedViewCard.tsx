import React, { useState } from 'react'
import { Card, CardBody, Col, Collapse, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Btn, H4, P, Image } from '../../../../../AbstractElements'
import { Chetpet, Department, VRPriority, TypeOfRequest, Budget, DueDate, VRDescription, VRStatus, VRStatusWithDate } from '../../../../../utils/Constant'
import NewRequestCardImage from '../../NewRequest/NewRequestViewCard/NewRequestCardImage'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Service'

const SchoolAdminApprovedViewCard = () => {
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
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{TypeOfRequest}</div>
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
        <Row className="g-3">
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
          <div className="form-group row mt-4 ">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
            <div className="col-xl-9 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
              <div className="card-wrapper border border-warning rounded text-warning">
                {VRStatus}
              </div>
            </div>
          </div>
        </Col>
      </div>
      <Row>
        <Col className='d-flex gap-3 mt-3 offset-sm-5'>
          <Btn color='info' onClick={needMoreInfoToggle}  >{"Need More Info"}</Btn>
          <Btn color='success' onClick={approveToggle} >{"Confirm"}</Btn>
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
                      <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestclone`}>
                        <Btn color="info" >{"Need More Info"}</Btn>
                      </Link>

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



      {/* need more info end */}

      {/* <H4 className="text-success my-3">{"History"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-warning">Shankar</H4>
                <P>Transport Head: Need 8 inch tyre</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>17-07-2024 11:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Suresh</H4>
                <P>School Admin Requestd More Info</P>
                <P>Please mention the tyre details</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>16-07-2024 1:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-warning">Shankar</H4>
                <P>Transport Head: Edited a Request </P>
                <div>
            <div>
                <div className="invoice-table custom-scrollbar" id="table">
                    <Table bordered striped responsive>
                        <thead className="thead-dark">
                            <tr>
                                <th className="col-3"><H6>Field</H6></th>
                                <th><H6>Past Details</H6></th>
                                <th><H6>Edited Detailed</H6></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>

                                    Request
                                </td>
                                <td>
                                    Bus Tyre Change
                                </td>
                                <td>
                                    <div>

                                        Bus Front Tyre Change
                                    </div>
                                </td>

                            </tr>


                        </tbody>
                    </Table>

                </div>
            </div>
        </div>             
                </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>18-07-2024 7:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Shankar</H4>
                <P>Transport Head: Created a Request </P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>15-07-2024 3:30 PM</span>
            </div>
          </Col>
        </Row>
      </div> */}
    </Col>

  )

}

export default SchoolAdminApprovedViewCard