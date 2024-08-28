import React from 'react'
import { Col, Card, CardBody, Row, Badge } from 'reactstrap'
import AdvanceSearch from './AdvanceSearch'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'

const PendingRequest = () => {

  return (
    <>
    <div className="table-responsive">
     <table className="table table-bordered">
      <Col sm="12">
        <Card className='mt-0'>
          <CardBody>
            <AdvanceSearch />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
            <Col lg="12">
              <Row className="card-block ">
                <Col sm="12" lg="12" xl="12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Request Code</th>
                        <th scope="col">S.No</th>
                        <th scope="col">Request</th>
                        <th scope="col">School</th>
                        <th scope="col">Department</th>
                        <th scope="col">Category</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Budget</th>
                        <th scope="col ">Due Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>1</td>
                        <td className='text-danger'>Bus Tyre Change</td>
                        <td>Chetpet</td>
                        <td>Transport</td>
                        <td>Transport</td>
                        <td>Suresh</td>
                        <td>17,000</td>
                        <td>15-07-2024</td>
                        <td><Badge color="warning" className='rounded-5'>Waiting For school Approval</Badge></td>
                        <td>
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/schooladminapprovedviewcard`}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                          <Link to={Href}><i className="fa fa-edit"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>002</td>
                        <td>2</td>
                        <td className='text-success'>Building for Kg Class Rooms </td>
                        <td>Trichy</td>
                        <td>Admin</td>
                        <td>Construction</td>
                        <td>Shankar</td>
                        <td>5,00,000</td>
                        <td>19-09-2024</td>
                        <td><Badge color="info" className='rounded-5'>Requested More info</Badge></td>
                        <td>
                          <Link to={Href}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                          <Link to={Href}><i className="fa fa-edit"></i></Link>
                        </td>
                      </tr>
                      <tr>
                        <td>003</td>
                        <td>3</td>
                        <td className='text-danger'>Table and Desk</td>
                        <td>Kumbakonam</td>
                        <td>science</td>
                        <td>Furniture</td>
                        <td>Shankar</td>
                        <td>17,000</td>
                        <td>15-07-2024</td>
                        <td><Badge color="warning" className='rounded-5'>Waiting For Quotation</Badge></td>
                        <td>
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestquotation`}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                        </td>
                      </tr>
                      <tr>
                        <td>004</td>
                        <td>4</td>
                        <td className='text-warning'>Computer</td>
                        <td>Polachery</td>
                        <td>IT</td>
                        <td>Electronics</td>
                        <td>Babu</td>
                        <td>50,000</td>
                        <td>15-07-2024</td>

                        <td><Badge color="warning" className='rounded-5'>Waiting For Commitee Approval</Badge></td>
                        <td>
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestmoreinfo`}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                        </td>

                      </tr>
                      <tr>
                        <td>005</td>
                        <td>5</td>
                        <td className='text-warning'>Projector</td>
                        <td>MIRS</td>
                        <td>Social</td>
                        <td>Electronics</td>
                        <td>Guru</td>
                        <td>17,000</td>
                        <td>15-07-2024</td>
                        <td><Badge color="warning" className='rounded-5'>Waiting For PO</Badge></td>
                        <td>
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestupdatehistory`}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                        </td>
                      </tr>
                       {/*  <tr>
                        <td>6</td>
                        <td>Bus Front Tyre Change</td>
                        <td>Chetpet</td>
                        <td>Transport</td>
                        <td>Shankar</td>
                        <td>17,000</td>
                        <td>15-07-2024</td>
                        <td><Badge color="warning" className='rounded-5'>Waiting For school Head</Badge></td>
                        <td>
                          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestcancel`}><i className="fa fa-eye"></i></Link>
                          <span>  </span>
                        </td>
                      </tr>
                    <tr>
                                    <td>7</td>
                                    <td>Bus Front Tyre Change</td>
                                    <td>Chetpet</td>
                                    <td>Transport</td>
                                    <td>17,000</td>
                                    <td>15-07-2024</td>
                                    
                                    <td><Image src="../assets/images/other-images/tyre-img-2.jpeg" alt="Example Image" className='w-50'/></td>
                                    <td className='text-primary'>More Info Requested</td>
                                    <td>
                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestselectedquotation`}><i className="fa fa-eye"></i></Link>
                                    <span>  </span>
                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Bus Front Tyre Change</td>
                                    <td>Chetpet</td>
                                    <td>Transport</td>
                                    <td>17,000</td>
                                    <td>15-07-2024</td>
                                    
                                    <td><Image src="../assets/images/other-images/tyre-img-2.jpeg" alt="Example Image" className='w-50'/></td>
                                    <td className='text-primary'>More Info Requested</td>
                                    <td>
                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestquotationone`}><i className="fa fa-eye"></i></Link>
                                    <span>  </span>
                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Bus Front Tyre Change</td>
                                    <td>Chetpet</td>
                                    <td>Transport</td>
                                    <td>17,000</td>
                                    <td>15-07-2024</td>
                                    
                                    <td><Image src="../assets/images/other-images/tyre-img-2.jpeg" alt="Example Image" className='w-50'/></td>
                                    <td className='text-primary'>More Info Requested</td>
                                    <td>
                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestquotationtwo`}><i className="fa fa-eye"></i></Link>
                                    <span>  </span>
                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Bus Front Tyre Change</td>
                                    <td>Chetpet</td>
                                    <td>Transport</td>
                                    <td>17,000</td>
                                    <td>15-07-2024</td>
                                    
                                    <td><Image src="../assets/images/other-images/tyre-img-2.jpeg" alt="Example Image" className='w-50'/></td>
                                    <td className='text-primary'>More Info Requested</td>
                                    <td>
                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestquotationthree`}><i className="fa fa-eye"></i></Link>
                                    <span>  </span>
                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                    </td>
                                </tr>  */}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col></table></div>
     
    </>
  )
}

export default PendingRequest