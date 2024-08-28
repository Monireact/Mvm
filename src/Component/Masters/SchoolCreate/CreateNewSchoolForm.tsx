import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Btn } from "../../../AbstractElements";
import {
  EmailId,
  MobileNumber,
  SchoolAddress,
  Logo,
  Add,
  Cancel,
  Active,
  InActive,
  SearchStatus
} from "../../../utils/Constant";
import { ErrorMessage, Field } from "formik";
import { AddschoolFormValidationsProp } from "../../../Types/Masters/School/schools";

const AddNewSchoolForm = () => {
  const { id } = useParams<{ id: string }>();
  const [schoolcode, setschoolcode] = useState("");
  // console.log(schoolcode)
  const [location, setlocation] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [emailid, setemailid] = useState("");
  const [address, setaddress] = useState("");
  const [edit, setedit] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const baseApiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(
    () => {
      if (id) {
        setedit(true);
        fetchSchool(id);
      }
    },
    [id]
  );

  const fetchSchool = async (id: string) => {
    try {
      console.log("test");
      const response = await fetch(`${baseApiUrl}/School/${id}`, {
        method: "POST"
      });
      const result = await response.json();
      setschoolcode(result.schoolcode);
      setlocation(result.location);
      setmobilenumber(result.mobilenumber);
      setemailid(result.emailid);
      setaddress(result.address);
    } catch (err) {
      console.log(err, "test");
      // setError(err)
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseApiUrl}/School/Create`, {
        method: "POST",
        body: JSON.stringify({
          schoolcode,
          location,
          mobilenumber,
          emailid,
          address
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      console.log(result);
      navigate(`${process.env.PUBLIC_URL}/masters/schools`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <Row>
        <Col md="8 offset-md-1">
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {"School Name"}
                </Label>
              </Col>
              <Col sm="8">
                <Input
                  type="text"
                  value={location}
                  onChange={(e: any) => setlocation(e.target.value)}
                  className="form-control"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {"School Code"}
                </Label>
              </Col>
              <Col sm="8">
                <Input
                  type="text"
                  value={schoolcode}
                  onChange={(e: any) => setschoolcode(e.target.value)}
                  className="form-control"
                />
                <p>
                  {error}
                </p>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {EmailId}
                </Label>
              </Col>
              <Col sm="8">
                <Input
                  type="text"
                  value={emailid}
                  onChange={(e: any) => setemailid(e.target.value)}
                  className="form-control"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {MobileNumber}
                </Label>
              </Col>
              <Col sm="8">
                <Input
                  type="number"
                  value={mobilenumber}
                  onChange={(e: any) => setmobilenumber(e.target.value)}
                  className="form-control"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {SchoolAddress}
                </Label>
              </Col>
              <Col sm="8">
                <Input
                  type="textarea"
                  value={address}
                  onChange={(e: any) => setaddress(e.target.value)}
                  className="form-control"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label>
                  {Logo}
                </Label>
              </Col>
              <Col sm="8">
                <Input type="file" className="form-control" Value={"logo"} />
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="offset-sm-4">
            <Btn color="primary" className="me-3">
              {" "}{edit ? "Update" : "Add "}
            </Btn>
            <Link to={`${process.env.PUBLIC_URL}/masters/schools`}>
              <Btn color="light">
                {Cancel}
              </Btn>
            </Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default AddNewSchoolForm;
