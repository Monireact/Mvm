import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { H6, P } from '../../../../AbstractElements'

const RolesRequestPermission = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3">
      <H6 className="sub-title">{"Approval Permission"}</H6>
      <Row>
          <Col sm="4">
            <P className='mt-1'>{"Requests"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Create"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
              <Input id="checkbox-primary-school-2" type="checkbox" />
              <Label for='checkbox-primary-school-2' check>{"Cancel"}</Label>
              <Input id="checkbox-primary-school-2" type="checkbox" />
              <Label for='checkbox-primary-school-2' check>{"Reinitiate"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Budget Verification"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Approve"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Update "}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"School Approval"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Approve"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1 ms-2' check>{"Hold"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Cancel"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Quotations"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Upload"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Quotation Selection"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Select"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Requote"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Cancel"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Committee Approval"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Hold"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Cancel"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Selected Quotation"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"PO"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Upload"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Bill"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Upload"}</Label>
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"View"}</Label>
            </div>
          </Col>
          <Col sm="4">
            <P className='mt-1'>{"Status"}</P>
          </Col>
          <Col sm="8">
            <div className="form-check checkbox checkbox-primary mb-0 d-flex gap-3">
              <Input id="checkbox-primary-school-1" type="checkbox" />
              <Label for='checkbox-primary-school-1' check>{"Update"}</Label>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default RolesRequestPermission