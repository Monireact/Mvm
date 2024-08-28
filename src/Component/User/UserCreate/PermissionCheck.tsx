import React from 'react'
import { RolesMasterPermissionCheckbox } from '../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'
import { Col, Input, Label, Row } from 'reactstrap'
import { P } from '../../../AbstractElements'
import { ApprovalRequest, MDepartments, MLinks, MTags, MVendors, OUsers, Quotation, School } from '../../../utils/Constant'

const PermissionCheck = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
            <Col sm="3">
                <P className='mt-1'>{School}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{MDepartments}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{MVendors}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{MLinks}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{MTags}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{ApprovalRequest}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{Quotation}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            <Col sm="3">
                <P className='mt-1'>{OUsers}</P>
            </Col>
            <Col sm="9">
                {RolesMasterPermissionCheckbox.map(({ id, text }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox"  />
                <Label check for={id}>
                    {text}
                </Label>
                </div>
            ))}
            </Col>
            
            
        </Row>
          
        </div>
    </Col>
  )
}

export default PermissionCheck