import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Card } from 'reactstrap'
import { VendorName, VendorContactPerson, VendorAddress, VendorState, VendorCity, VendorPincode, VendorEmailid, VendorPANNumber, VendorServices, VendorPhoneNumber, VendorGSTNumber, Add, Cancel } from '../../../../utils/Constant'
import ButtonSection from '../../SchoolCreate/SchoolButtonSection'
import { Link } from 'react-router-dom'
import { Btn, H4 } from '../../../../AbstractElements'

const EditVendorForm = () => {
  return (
<Form className="theme-form">
  <br />
  <Card className='p-2'>
    <H4>General Details</H4>
    <br />
  <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"School Name"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"Chetpet"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Vendor Name"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"Jk Tyres"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Vendor ID"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'JK-001'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Services"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Tyre supplier'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"PAN Number"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'ABCTY1234D'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Registration"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Regular'}/>
                    </Col>
                  </Row>
                </FormGroup>

               

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"GST Number"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'09AAACH7409R1ZZ'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Tags "}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Transport'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Status"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Active'}/>
                    </Col>
                  </Row>
                </FormGroup>

               

              
                
              </Col>
            </Row>

  </Card>
  <br />
  <Card className='p-2'>
    <H4>Contacts Details</H4>
    <br />
  <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Contact Person 1"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"Suresh Babu"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Phone Number 1"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"9953258745"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Email id 1"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'SureshJKTyres@gmails.com'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Contact Person 2"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Yogi Babu'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Phone Number 2"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'9444283465'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Email id 2"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'YogiJKtyres@gmail.com'}/>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>

  </Card>
  <br />
  <Card className='p-2'>
    <H4>Address Details</H4>
    <br />
  <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Address"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"12,Amman Street,T.Nagar"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"City"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"Chennai"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"State"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Tamil Nadu'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Pincode"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'6000200'}/>
                    </Col>
                  </Row>
                </FormGroup>

            

             
              </Col>
            </Row>

  </Card>
  <br />
  <Card className='p-2'>
    <H4>Bank Details</H4>
    <br />
  <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Bank Name"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"ABC BANK"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Account Number"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"92520220031152"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"Branch"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'ABC Branch'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"IFSC"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'EXAMP0001234'}/>
                    </Col>
                  </Row>
                </FormGroup>

            

             
              </Col>
            </Row>

  </Card>
           
            <Row className="justify-content-center">
              <Col md="6" className="d-flex flex-column col-md-6 ms-5">
                <div className="text-end offset-sm-1">
                  <Link to={`${process.env.PUBLIC_URL}/masters/vendors`}>
                    <Btn
                      color="primary"
                      type="submit"
                      className="me-3"
                     
                    >
                      {"Update"}
                    </Btn>{" "}
                  </Link>
                  <Link to={`${process.env.PUBLIC_URL}/masters/vendors`}>
                    <Btn color="light">{Cancel}</Btn>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>  )
}

export default EditVendorForm