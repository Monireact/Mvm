import React from 'react'
import { Col, Input, Label } from 'reactstrap'


import { UserCheckboxDataList } from '../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const DepartmentCheckBox = () => {

  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        {/* <H6 className="sub-title">{School}</H6> */}
          {UserCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
            <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
              <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
              <Label check for={id}>
                {text}
              </Label>
            </div>
          ))}
        </div>
    </Col>
  )
}

export default DepartmentCheckBox