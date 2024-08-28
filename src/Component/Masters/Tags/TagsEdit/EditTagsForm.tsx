import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { TagName, Description } from '../../../../utils/Constant'
import TagsUploadBtn from './TagsUploadBtn'

const EditTagsForm = () => {
  return (
<div>
       <Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
        
         
         

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{TagName}</Label>
              </Col>
              <Col sm="8">
                <Input type="text" className="form-control" value={"Bus Tyre"} />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>{Description}</Label>
              </Col>
              <Col sm="8">
                <Input type="textarea" className='form-control' value={"Bus Front Tyre "}/>
              </Col>
            </Row>
          </FormGroup>


          </Col>
      </Row>
       <TagsUploadBtn/>
    </Form>
    </div>   )
}

export default EditTagsForm