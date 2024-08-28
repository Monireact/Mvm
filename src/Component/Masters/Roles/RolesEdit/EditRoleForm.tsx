import React, { useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { Description } from '../../../../utils/Constant'
import RolesUploadBtn from './RoleEditUpdateBtn'



const EditRolesForm = () => {
  
  
  

  return (

<div> 
       <Form className="theme-form">
       <Row>
        <Col md="12 offset-md-1">
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label>{"RoleCode"}</Label>
              </Col>
              <Col sm="5">
                <Input type="text" value={"MVM-DH"} />
              </Col>
            </Row>
          </FormGroup>

       

          <FormGroup>
            <Row>
              <Col sm="2">
                <Label>{"RoleName"}</Label>
              </Col>
              <Col sm="5">
                <Input type="text" value={"Roster"} />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm="2">
                <Label>{Description}</Label>
              </Col>
              <Col sm="5">
                <Input type="textarea" value={"Department head or representative of the department to raise request"} />
              </Col>
            </Row>
          </FormGroup>

       

         



          {/* <FormGroup>
                <Row>
                  <Col sm="2">
                    <Label>{Level4Process}</Label>
                  </Col>
                  <Col sm="5">
                  <Input type='select' className="input-air-primary digits">
                  {CategoryDropDown.map((data:any, index:any) => (<option key={index}>{data}</option>))}
                </Input>
                <Btn color="primary"style={{ width: '5px' }}>+</Btn>
                 </Col>
                </Row>
              </FormGroup>
               */}
        </Col>
      </Row>
      <RolesUploadBtn/>
      {/* <CategoriesUploadBtn/> */}
      {/* <TagsUploadBtn/> */}
      {/* <ButtonSection /> */}
    </Form>
    </div>  )
}

export default EditRolesForm