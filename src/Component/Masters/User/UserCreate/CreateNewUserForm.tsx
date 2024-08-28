import React from 'react'

import { Row, Col, FormGroup, Label, Input } from 'reactstrap'

import DepartmentCheckBox from './DepartmentCheckBox'
import PermissionCheck from './PermissionCheck'
import UserSubitBTn from './Usersubmitbtn'
import { UserRoles } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { UsersName, UsersEmailId, UsersPhoneNumber, UsersPassword, UsersConfirmPassword, SearchStatus, Active, InActive, UserId, UserRole } from '../../../../utils/Constant'

const CreateNewUserForm = () => {
  return (
    <>
      <Row>
        <Col md="6 offset-md-2">
          
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersName}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" placeholder='Enter the Name' />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UserId}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" placeholder='Enter the Email Id/ User Id'  />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPhoneNumber}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" placeholder='Enter the Phone Number'  />
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UserId}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" value={"suresh123@gmail.com"} />
              </Col>
            </Row>
          </FormGroup> */}
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" placeholder='Password'   />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UsersConfirmPassword}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" placeholder='Confirm Password'    />
              </Col>
            </Row>
          </FormGroup>
          {/* <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{UserRole}</Label>
              </Col>
              <Col sm="8">
              <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {UserRolesDropdown.map((data:any, index:any) => (<option key={index}>{data}</option>))}
                </Input>
              </Col>
            </Row>
          </FormGroup> */}
        
          {/* <FormGroup>
              <Col sm="12">
                <DepartmentCheckBox />
              </Col>
          </FormGroup> */}
          {/* PermissionCheck */}
          {/* <FormGroup>
              <Col sm="12">
                <PermissionCheck />
              </Col>
          </FormGroup> */}
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
      <UserSubitBTn />
    </>
  )
}

export default CreateNewUserForm