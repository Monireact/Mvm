import React from "react";
import { Card, CardBody, Col, Container, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { UL, LI, Btn, H2, H3, H5, H4 } from "../../../AbstractElements";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  OProfile, PName, PEmailId, PMobileNumber, PUserName, Href, Approve, Hold, ViewCardCancel, Masters,
} from "../../../utils/Constant";
import { dynamicImage } from "../../../Service";
import { basicRadioCheckboxDataList } from "../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SchoolViewCardContainer = () => {
  const data = [

    { "id": "1", "text": "IT", "type": "Support Services" },
    { "id": "2", "text": "Accounts", "type": "Administrative Departments" },
    { "id": "3", "text": "Transport", "type": "Support Services" },
    { "id": "4", "text": "Admin", "type": "Administrative Departments" },
    { "id": "5", "text": "Sports", "type": "Extracurricular and Athletic Departments" },
    { "id": "6", "text": "Science", "type": "Academic Departments" },
    { "id": "7", "text": "English", "type": "Academic Departments" },
    { "id": "8", "text": "Tamil", "type": "Academic Departments" },
    { "id": "9", "text": "Hindi", "type": "Academic Departments" },
    { "id": "10", "text": "Maths", "type": "Academic Departments" },
    { "id": "11", "text": "Social Studies", "type": "Academic Departments" },
    { "id": "12", "text": "Biology", "type": "Academic Departments" },
    { "id": "14", "text": "Physics", "type": "Academic Departments" },
    { "id": "13", "text": "Computer Science", "type": "Academic Departments" },


  ];

  return (
    <>
      <Breadcrumbs mainTitle={"Schools"} parent={Masters} />



      <Container fluid>
        <Row>
          <Card>
            <H4 className="pt-2 ps-3">School Details</H4>
            <CardBody>
              <div className="col-lg-9 col-md-12 mx-5 mt-3">
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    School Name
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"Maharishi Vidya Mandir Senior Secondary School"}
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    School Code
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"CHE"}
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Location
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"Chetpet"}
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Email Id
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"chetpet@gmail.com"}
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Mobile Number
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"952976585"}
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Address
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {
                      " Old No. 4, New No. 13, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112"
                    }
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Logo
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img
                      className="img-fluid border rounded"
                      src={dynamicImage("other-images/mvm-favicon.png")}
                      alt="thumbnail"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Status
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"Active"}
                  </div>
                </div>

                <div className="form-group row mt-3">
                  <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    Budget Allocated
                  </label>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    {"25000"}
                  </div>
                </div>
              </div>
            </CardBody>

            <br />
          </Card>
        </Row>
      </Container>

      <br />



      <Container fluid>
        <Row>
          <Card>
            <H4 className="pt-2 ps-3">Departments</H4>
            <CardBody>


              <FormGroup className="ms-5  ">
                <Row>
                  <Col sm="12">
                    <div className="card-wrapper border rounded-3 p-3">
                      <div>
                        <Row>
                          <Col className="mt-3">

                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> IT</Col>
                          <Col className="mt-3">

                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Accounts</Col>
                          <Col className="mt-3">

                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Transport</Col>
                        </Row>
                        <Row>

                          <Col className="mt-3">
                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Admin
                          </Col>
                          <Col className="mt-3">
                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Sports
                          </Col>
                          <Col className="mt-3">
                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Library
                          </Col>
                        </Row>
                        <Row>
                          <Col className="mt-3">
                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Accounts
                          </Col>
                          <Col className="mt-3">
                            <i className="fa fa-circle x-small-icon" aria-hidden="true"></i> Security 
                          </Col>
                          <Col className="mt-3">
                            <i className="fa fa-circle  x-small-icon" aria-hidden="true"></i> Food Services
                          </Col>
                        </Row>



                      </div>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
            </CardBody>
          </Card>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Card>
            <H4 className="pt-2 ps-3">Users Details</H4>
            <CardBody>
              <Table className="table bg-white ms-5">
                <thead>
                  <tr>

                    <th>Names</th>
                    <th>Roles</th>
                    <th>Departments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>Shri. Ajay Prakash Shrivastava</td>
                    <td>Chairman</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Dr. T.C. Perumal</td>
                    <td>Secretary</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. Sundareswar Perumal</td>
                    <td>Executive Officer</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. L. Neelakanta Pillai</td>
                    <td>Director & Co-Chairman</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. G. Hari Babu</td>
                    <td>Principal</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Smt. V. Sundari</td>
                    <td>Vice Principal</td>
                    <td>Management</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. C. Ramalingam</td>
                    <td>Chief Administrative Officer</td>
                    <td>Admin Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Smt. S. Nandhini</td>
                    <td>Administrative Officer</td>
                    <td>Admin Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. E. Baranidharan</td>
                    <td>Chief Financial Officer</td>
                    <td>Finance Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. K. Subburaj</td>
                    <td>Financial Advisor</td>
                    <td>Finance Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Smt. Premalatha Bhoopathy</td>
                    <td>Chief Educational Officer</td>
                    <td>Education Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri.  B. Suresh</td>
                    <td>Department Head</td>
                    <td>IT Department </td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. S. Santhosh</td>
                    <td>Department Head</td>
                    <td>Accounts Department </td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Smt. K. Deepthi</td>
                    <td>Department Head</td>
                    <td>Transport Department </td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>
                  </tr>
                  <tr>

                    <td>Shri. A. Palani</td>
                    <td>Department Head</td>
                    <td>Admin Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>

                  </tr>

                  <tr>

                    <td>Smt. S. Deepika</td>
                    <td>Department Head</td>
                    <td>Sports Department </td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>

                  </tr>
                  <tr>

                    <td>Shri. M. Mohan</td>
                    <td>Department Head</td>
                    <td>Science Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>

                  </tr>
                  <tr>

                    <td>Shri. K. Paul</td>
                    <td>Structural Engineer</td>
                    <td>Construction Department</td>
                    <td><div className="view">
        <Link to={`${process.env.PUBLIC_URL}/mas`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div></td>

                  </tr>

                </tbody>
              </Table>
            </CardBody>
            <div className="offset-5 mt-5">
              <Link to={`${process.env.PUBLIC_URL}/masters/schools`}>
                <Btn color="light" className="me-3">
                  {"Back"}
                </Btn>
              </Link>
            </div>
            <br />
          </Card>
        </Row>

      </Container>
    </>

  );
};

export default SchoolViewCardContainer;
