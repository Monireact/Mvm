import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { LinksFromType, LinksFromLink, LinksFromDescription, selectschool } from '../../../../utils/Constant';
import LinkButtonSection from './LinkButtonSection';
import { LinkDropdown } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput';

const CreateNewLinkForm = () => {
  return (
    <>
          <Row>
            <Col md="6 offset-md-2">
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label>{selectschool}</Label>
                  </Col>
                  <Col sm="9">
                  <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
                 </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label>{LinksFromType}</Label>
                  </Col>
                  <Col sm="9">
                    <Input type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label>{LinksFromLink}</Label>
                  </Col>
                  <Col sm="9">
                    <Input type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label>{LinksFromDescription}</Label>
                  </Col>
                  <Col sm="9">
                    <Input type="textarea" />
                  </Col>
                </Row>
              </FormGroup>
          </Col>
        </Row>
        <LinkButtonSection/>

    

        </>
    )
  }

export default CreateNewLinkForm