import React from "react";
import {
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import {

  Level1Process,
  Level2Process,
  Level3Process,
  Level4Process,
  Levels,
  Counts,
  Roles,
  Types,
  Level5Process,
} from "../../../../utils/Constant";
import { CategoryRequiredCounts, CategoryRoles, CategoryType } from "../../../../Data/Forms/FormsControl/BaseInput/BaseInput";
import CategoriesAddBtn from "../CategoriesEdit/CategoriesAddBtn";
import CategoriestMultiSelector from "./CategoriesMultiSelects";

const CreateNewCategoriesForm = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="11" className="offset-sm-1" >
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
                <Col sm="5">
                  <Label>{Roles}</Label>
                </Col>
                <Col sm="3">
                  <Label>{Types}</Label>
                </Col>
                <Col sm="2">
                  <Label>{Counts}</Label>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm="1">
                  <Label>{Level1Process}</Label>
                </Col>
                <Col sm="5">
                  <CategoriestMultiSelector />
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
                <Col sm="5">
                  <CategoriestMultiSelector />
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
                <Col sm="5">
                  <CategoriestMultiSelector />
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
                <Col sm="5">
                  <CategoriestMultiSelector />
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
                <Col sm="5">
                <CategoriestMultiSelector />
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
            <Col className="offset-sm-2">
              <CategoriesAddBtn />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateNewCategoriesForm;
