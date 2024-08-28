import React from 'react'
import { Col, Row, Input, Label } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { School, MDepartments, MVendors, MLinks, MTags, ApprovalRequest, Quotation, OUsers } from '../../../../utils/Constant'
import { PermissionCheckboxDataList } from '../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'



const PermissionCheck = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
            <Col sm="3">
                <P className='mt-1'>{School}</P>
            </Col>
            <Col sm="9">
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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
                {PermissionCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
                <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
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