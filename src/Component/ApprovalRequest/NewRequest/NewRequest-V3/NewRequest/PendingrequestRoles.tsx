import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { DepartmentCheckboxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const PendingRequestRoles = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3">
        <H6 className="sub-title">{"Roles"}</H6>
        <div className="form-check-size">
          {DepartmentCheckboxDataList.map(({ id, text }, index) => (
            <div className="form-check form-check-inline radio radio-primary" key={index}>
              <Input id={id} type="radio" name="radio5" defaultChecked />
              <Label className="mb-0" for={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default PendingRequestRoles