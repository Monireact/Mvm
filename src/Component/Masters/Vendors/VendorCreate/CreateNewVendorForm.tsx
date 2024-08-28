import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input, Card, CardBody, Button, Collapse } from "reactstrap";
import { Field, Form, ErrorMessage } from "formik";
import { Typeahead } from "react-bootstrap-typeahead";
import { VendorTags } from "../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead";
import { Active, Cancel, InActive, SearchStatus, VendorName, VendorID, VendorServies, VendorGSTNumber, VendorPANNumber, Add, VendorRegistration, Href, } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { AddVendorFormValidationsProp } from "../../../../Types/Masters/Vendors";

const CreateNewVendorForm: React.FC<AddVendorFormValidationsProp> = ({ errors, submitErrors, setSubmitError, }) => {
  const [isGeneralOpen, setIsGeneralOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);

  return (
    <Form className="custom-input">
      <Row>
        <Col md="8" className="offset-1">
          <Card>
            <CardBody>
              {/* General Details */}
              <div  color="light" className="w-30 text-start"
                onClick={() => setIsGeneralOpen(!isGeneralOpen)}
                aria-expanded={isGeneralOpen}
                aria-controls="general-details-collapse"
              >
                General Details
                <span className={`ms-2 ${isGeneralOpen ? 'rotate' : ''}`}>▼</span>
              </div>
              <Collapse isOpen={isGeneralOpen} id="general-details-collapse">
                <CardBody>
                  {/* General Details Form */}
                  {/* <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"School Name"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          as="select"
                          name="schoolName"
                          className={`form-control`}
                          defaultValue={"Select School"}
                        >
                          {SchoolName.map((data, index) => (
                            <option key={index}>{data}</option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="schoollocation"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup> */}
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"School Name"}</Label>
                      </Col>
                      <Col sm="8">
                        <Typeahead
                          options={VendorTags}
                          multiple
                          clearButton
                          placeholder=""
                          labelKey="name"
                          id="selectTwo"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorName}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="vendorname"
                          className={`form-control ${submitErrors &&
                            (errors.vendorname ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the vendor name"}
                        />
                        <ErrorMessage
                          name="vendorname"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorID}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="Vendorid"
                          className={`form-control ${submitErrors &&
                            (errors.VendorID ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Vendor Id"}
                        />
                        <ErrorMessage
                          name="Vendorid"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorServies}</Label>
                      </Col>
                      <Col sm="8"> 
                       <Field
                          type="text"
                          name="  "
                          className={`form-control ${submitErrors &&
                            (errors.services ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the vendor name"}
                        />
                         <ErrorMessage
                          name="servies"
                          component="span"
                          className="invalid-feedback"
                        /></Col>
                    
                    </Row>
                  </FormGroup>

                  {/* <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorRegistration}</Label>
                      </Col>
                      <Col sm="8" className="d-flex gap-2">
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="RegularGst"
                            type="radio"
                            name="VendorType"
                            value="Gst"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="RegularGst"
                          >
                            {"Unknow"}
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="CompositeGst"
                            type="radio"
                            name="VendorType"
                            value="WithGst"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="CompositeGst"
                          >
                            {"Composition"}
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="CompositeGst"
                            type="radio"
                            name="VendorType"
                            value="WithGst"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="CompositeGst"
                          >
                            {"Consumer"}
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="CompositeGst"
                            type="radio"
                            name="VendorType"
                            value="WithGst"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="CompositeGst"
                          >
                            {"Regular"}
                          </Label>
                        </FormGroup>
                     
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="CompositeGst"
                            type="radio"
                            name="VendorType"
                            value="WithGst"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="CompositeGst"
                          >
                            {"Unregistered"}
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup> */}
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorPANNumber}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="pannumber"
                          className={`form-control ${submitErrors &&
                            (errors.pannumber ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the PAN number"}
                        />
                        <ErrorMessage
                          name="pannumber"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label for="vendorType">{VendorRegistration}</Label>
                      </Col>
                      <Col sm="8">
                        <div className="d-flex flex-wrap gap-2">
                          <FormGroup check className="mb-2">
                            <Input
                              className="form-check-input"
                              id="UnknownVendor"
                              type="radio"
                              name="VendorType"
                              value="Unknown"
                            />
                            <Label
                              className="form-check-label mb-0"
                              htmlFor="UnknownVendor"
                            >
                              {"Unknown"}
                            </Label>
                          </FormGroup>
                          <FormGroup check className="mb-2">
                            <Input
                              className="form-check-input"
                              id="CompositionGst"
                              type="radio"
                              name="VendorType"
                              value="Composition"
                            />
                            <Label
                              className="form-check-label mb-0"
                              htmlFor="CompositionGst"
                            >
                              {"Composition"}
                            </Label>
                          </FormGroup>

                          <FormGroup check className="mb-2">
                            <Input
                              className="form-check-input"
                              id="ConsumerGst"
                              type="radio"
                              name="VendorType"
                              value="Consumer"/>
                            <Label
                              className="form-check-label mb-0"
                              htmlFor="ConsumerGst"
                            >
                              {"Consumer"}
                            </Label>
                          </FormGroup>
                          <FormGroup check className="mb-2">
                            <Input
                              className="form-check-input"
                              id="RegularGst"
                              type="radio"
                              name="VendorType"
                              value="Regular"
                            />
                            <Label
                              className="form-check-label mb-0"
                              htmlFor="RegularGst"
                            >
                              {"Regular"}
                            </Label>
                          </FormGroup>
                          <FormGroup check className="mb-2">
                            <Input
                              className="form-check-input"
                              id="UnregisteredGst"
                              type="radio"
                              name="VendorType"
                              value="Unregistered"
                            />
                            <Label
                              className="form-check-label mb-0"
                              htmlFor="UnregisteredGst"
                            >
                              {"Unregistered"}
                            </Label>
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>


                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{VendorGSTNumber}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="gstnumber"
                          className={`form-control ${submitErrors &&
                            (errors.gstnumber ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the GST number"}
                        />
                        <ErrorMessage
                          name="gstnumber"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Tags"}</Label>
                      </Col>
                      <Col sm="8">
                        <Typeahead
                          options={VendorTags}
                          multiple
                          clearButton
                          placeholder=""
                          labelKey="name"
                          id="selectTwo"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{SearchStatus}</Label>
                      </Col>
                      <Col sm="8" className="d-flex gap-2">
                        <FormGroup check>
                          <Input
                            className="form-check-input me-2"
                            id="ActiveStatus"
                            type="radio"
                            name="status"
                            value="active"
                            defaultChecked
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="ActiveStatus"
                          >
                            {Active}
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            className="form-check-input"
                            id="InactiveStatus"
                            type="radio"
                            name="status"
                            value="inactive"
                          />
                          <Label
                            className="form-check-label mb-0"
                            htmlFor="InactiveStatus"
                          >
                            {InActive}
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              {/* Contact Details */}
              <div
                color="light"
                className="w-30 text-start"
                onClick={() => setIsContactOpen(!isContactOpen)}
                aria-expanded={isContactOpen}
                aria-controls="contact-details-collapse"
              >
                Contact Details
                <span className={`ms-2 ${isContactOpen ? 'rotate' : ''}`}>▼</span>
              </div>
              <Collapse isOpen={isContactOpen} id="contact-details-collapse">
                <CardBody>
                  {/* Contact Details Form */}
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Contact person 1"}</Label>
                      </Col>



                      <Col sm="8">
                        <Field
                          name="contactperson1"
                          type="text"
                          className={`form-control ${submitErrors && (errors.contactperson1 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the contact person 1"}
                        />
                        <ErrorMessage
                          name="contactperson1"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Phone Number 1"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="phonenumber1"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.phonenumber1 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the phone number 1"}
                        />
                        <ErrorMessage
                          name="phonenumber1"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Email Id 1"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="emailid1"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.emailid1 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the email id 1"}
                        />
                        <ErrorMessage
                          name="emailid1"
                          component="span"
                          className="invalid-feedback"
                        />

                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Contact person 2"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="contactperson2"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.contactperson2 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the contact person 2"}
                        />
                        <ErrorMessage
                          name="contactperson2"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Phone Number 2"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="phonenumber2"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.phonenumber2 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the phone number 2"}
                        />
                        <ErrorMessage
                          name="phonenumber2"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Email Id 2"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="emailid2"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.emailid2 ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the email id 2"}
                        />
                        <ErrorMessage
                          name="emailid2"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              {/* Address Details */}
              <div
                color="light"
                className="w-30 text-start"
                onClick={() => setIsAddressOpen(!isAddressOpen)}
                aria-expanded={isAddressOpen}
                aria-controls="address-details-collapse"
              >
                Address Details
                <span className={`ms-2 ${isAddressOpen ? 'rotate' : ''}`}>▼</span>
              </div>
              <Collapse isOpen={isAddressOpen} id="address-details-collapse">
                <CardBody>
                  {/* Address Details Form */}
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Address"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="Address"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.address_details ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Address "}
                        />
                        <ErrorMessage
                          name="Address"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"City "}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="City"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.city_details ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the City"}
                        />
                        <ErrorMessage
                          name="City"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"State"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="State"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.state_details ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the State"}
                        />
                        <ErrorMessage
                          name="State"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Pincode"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          name="Pincode"
                          type="text"
                          className={`form-control ${submitErrors &&
                            (errors.pincode_details ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Pincode"}
                        />
                        <ErrorMessage
                          name="Pincode"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              {/* Bank Details */}
              <div
                color="light"
                className="w-30 text-start"
                onClick={() => setIsBankOpen(!isBankOpen)}
                aria-expanded={isBankOpen}
                aria-controls="bank-details-collapse"
              >
                Bank Details
                <span className={`ms-2 ${isBankOpen ? 'rotate' : ''}`}>▼</span>
              </div>
              <Collapse isOpen={isBankOpen} id="bank-details-collapse">
                <CardBody>
                  {/* Bank Details Form */}
                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Bank Name"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="bankname"
                          className={`form-control ${submitErrors &&
                            (errors.bankname ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Bank Name"}
                        />
                        <ErrorMessage
                          name="bankname"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Account Number"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="accountnumber"
                          className={`form-control ${submitErrors &&
                            (errors.accountnumber ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Account Number"}
                        />
                        <ErrorMessage
                          name="accountnumber"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"Branch"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="branch"
                          className={`form-control ${submitErrors &&
                            (errors.branch ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the Branch"}
                        />
                        <ErrorMessage
                          name="branch"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col sm="4">
                        <Label>{"IFSC"}</Label>
                      </Col>
                      <Col sm="8">
                        <Field
                          type="text"
                          name="ifsc"
                          className={`form-control ${submitErrors &&
                            (errors.ifsc ? "is-invalid" : "is-valid")
                            }`}
                          placeholder={"Enter the IFSC"}
                        />
                        <ErrorMessage
                          name="ifsc"
                          component="span"
                          className="invalid-feedback"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </CardBody>
          </Card>

          <br />
          <Row className="justify-content-center">
            <Col md="6" className="d-flex flex-column col-md-6 ms-5">
              <div className="text-end offset-sm-1">
                <Link to={Href}>
                  <Button
                    color="primary"
                    type="submit"
                    className="me-3"
                    onClick={() => setSubmitError(true)}>
                    {Add}
                  </Button></Link>
                <Link to={`${process.env.PUBLIC_URL}/masters/vendors`}>
                  <Button color="light">{Cancel}</Button>   </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateNewVendorForm;
