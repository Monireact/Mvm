import React from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { LinkDropdown } from '../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { selectschool, UsersName, UsersEmailId, UsersPhoneNumber, Usersname, UsersPassword, UsersConfirmPassword, SearchStatus, Active, InActive } from '../../../utils/Constant'
import CommonFormFooter from '../../Forms/FormsControl/BaseInput/Common/CommonFormFooter'
import DepartmentCheckBox from '../UserCreate/DepartmentCheckBox'
import PermissionCheck from '../UserCreate/PermissionCheck'

const UserEditForm = () => {
  return (
<>
      <Row>
        <Col md="6 offset-md-2">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{selectschool}</Label>
              </Col>
              <Col sm="8">
              <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersName}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"Girish"} />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersEmailId}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"girish@gmail.com"}/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPhoneNumber}</Label>
              </Col>
              <Col sm="8">
                <Input type="number" value={"9865321478"}/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Usersname}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"Girish11"}/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"Girish@12"}/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersConfirmPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"Girish@12"}/>
              </Col>
            </Row>
          </FormGroup>
          {/* DepartmentCheckBox */}
          <FormGroup>
              <Col sm="12">
                <DepartmentCheckBox />
              </Col>
          </FormGroup>
          {/* PermissionCheck */}
          <FormGroup>
              <Col sm="12">
                <PermissionCheck />
              </Col>
          </FormGroup>
          <FormGroup className="d-flex gap-3 checkbox-checked">
              <Col sm="4">
                <Label>{SearchStatus}</Label>
              </Col>
              <Col sm="8" className='d-flex gap-2'>
                <FormGroup check>
                  <Input className="form-check-input" id="RaiserequestsBasic" type="radio" name="RaiserequestsApproximateBudget" checked/>
                  <Label className="form-check-label mb-0" for='RaiserequestsBasic'>{Active}</Label>
                </FormGroup>
                <FormGroup check>
                  <Input className="form-check-input" id="Raiserequestintermediate" type="radio" name="RaiserequestsApproximateBudget"  />
                  <Label className="form-check-label mb-0" for='Raiserequestintermediate'>{InActive}</Label>
                </FormGroup>              
              </Col>
          </FormGroup>
        </Col>
      </Row>
      <CommonFormFooter />
    </>   )
}

export default UserEditForm