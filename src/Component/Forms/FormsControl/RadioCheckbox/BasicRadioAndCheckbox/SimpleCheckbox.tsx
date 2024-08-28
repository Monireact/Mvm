import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { School } from '../../../../../utils/Constant'
import { basicRadioCheckboxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const SimpleCheckbox = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{"School List"}</H6>
          {basicRadioCheckboxDataList.map(({ id, text,  }, index) => (
            <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
              <Input id={id} type="checkbox" />
              <Label check for={id}>
                {text}
              </Label>
            </div>
          ))}
        </div>
    </Col>
  )
}

export default SimpleCheckbox