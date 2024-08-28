import React from 'react'
import { Link } from 'react-feather'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'

const PoModalData = () => {
  return (
      <><Row>
          <Col sm-6>
              <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor</label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"JK Tyre"}
                  </div>
              </div>
          </Col><Col sm-6>
              <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"jktyre@support.co.in"}
                  </div>
              </div>
          </Col>
      </Row>
      <Row>
              <Col sm-6>
                  <div className="form-group row mt-3">
                      <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Address</label>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"No.12, Anna Nagar, Chennai-28"}
                      </div>
                  </div>
              </Col>
              <Col sm-6>
                  <div className="form-group row mt-3">
                      <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">GST Number</label>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"29ABCDE1234F1Z5"}
                      </div>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col sm-6>
                  <div className="form-group row mt-3">
                      <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Websit</label>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"https://www.jktyre.com/"}
                      </div>
                  </div>

              </Col>
              <Col sm-6>
                  <div className="form-group row mt-3">
                      <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">PAN Number</label>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"THNDH82388"}
                      </div>
                  </div>
              </Col>
          </Row>
          <Form className="g-3">
              <Row>
                  <Col sm="6">
                      <FormGroup>
                          <Label>{"PO Number"}</Label>
                          <Input type="text" name="firstName" />
                      </FormGroup>
                  </Col>
                  <Col sm="6">
                      <FormGroup>
                          <Label>{"Advance Paid"}</Label>
                          <Input type="text" name="firstName" />
                      </FormGroup>
                  </Col>
                  <Col sm="12">
                      <FormGroup>
                          <Label>{"upload PO"}</Label>
                          <Input type="file" name="firstName" />
                      </FormGroup>
                  </Col>
                  <Col sm="12">
                      <FormGroup>
                          <Label>{"Comments"}</Label>
                          <Input type="textarea" name="firstName" />
                      </FormGroup>
                  </Col>
                 
              </Row>
          </Form>
          </>
                 
                
                )
}

export default PoModalData