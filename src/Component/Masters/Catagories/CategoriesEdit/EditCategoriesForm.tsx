import React from 'react'
import { Row, Col, FormGroup, Label, Input, Container } from 'reactstrap'
import { CategoryRequiredCounts, CategoryRoles, CategoryType } from '../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { Level1Process, Level2Process, Level3Process, Level4Process, Counts, Levels, Roles, Types, Level5Process, Add, Cancel } from '../../../../utils/Constant'
import CategoriesUploadBtn from './CategoryupdateButton'
import CategoriesAddBtn from './CategoriesAddBtn'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../AbstractElements'



const EditCategoriesForm = () => {


  return (
    <>
     <Container fluid>
        <Row className="theme-form">
          <Col md="10 offset-sm-2" >
            <FormGroup>
              <Row>
                <Col sm="2">
                  <Label>{"Category Name"}</Label>
                </Col>
                <Col sm="6">
                  <Input type="text" className="form-control" placeholder='Enter the category name' />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="2">
                  <Label>{"Description"}</Label>
                </Col>
                <Col sm="6">
                  <Input type="textarea" className="form-control" placeholder='Enter the description' />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className="mt-2">
                <Col sm="1">
                  <Label>{Levels}</Label>
                </Col>
                <Col sm="3">
                  <Label>{Roles}</Label>
                </Col>
                <Col sm="3">
                  <Label>{Types}</Label>
                </Col>
                <Col sm="1">
                  <Label>{Counts}</Label>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level1Process}</Label>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRoles.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryType.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRequiredCounts.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level2Process}</Label>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRoles.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryType.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRequiredCounts.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level3Process}</Label>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRoles.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryType.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRequiredCounts.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level4Process}</Label>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRoles.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryType.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRequiredCounts.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level5Process}</Label>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRoles.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="3">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryType.map((data: any, index: any) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm="1" className="d-flex align-items-center">
                  <Input type="select" className="input-air-primary digits">
                    {CategoryRequiredCounts.map((data, index) => (
                      <option key={index}>{data}</option>
                    ))}
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            
          </Col>
        </Row>
      </Container>
      
      <Row className="justify-content-center">
    <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
      <div className="text-end offset-sm-1">
      <Link to={`${process.env.PUBLIC_URL}/masters/categories`}>
        <Btn color="primary" className="me-3">{"Update"}</Btn>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/masters/categories`}>
          <Btn color="light">{Cancel}</Btn>
        </Link>
      </div>
    </Col>
  </Row> 
    </>

  )
}

export default EditCategoriesForm;