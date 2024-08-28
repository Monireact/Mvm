import React from 'react'
import { Col, Card, CardBody, Badge, Row } from 'reactstrap'
import NRStaticTable from '../../NewRequest/NewRequestStaticTable.tsx/NRStaticTable'
import AdvanceSearch from './AdvanceSearch'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'
import { Image } from '../../../../../AbstractElements'

const WaitingForPo = () => {
    return (
        <>
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
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Request Code</th>
                                                <th scope="col">School</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Request</th>
                                                <th scope="col">Budget</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Priority</th>
                                                <th scope="col" className='img-width'>Image</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>REQ-001</td>
                                                <td>Chetpet</td>
                                                <td>Transport</td>
                                                <td>Bus Tyre Change</td>
                                                <td>17,000</td>
                                                <td>15-07-2024</td>
                                                <td>Medium</td>
                                                <td><Image src="../assets/images/other-images/tyre-img-3.jpg" alt="Example Image" className='img-width' /></td>
                                                <td><Badge color="warning" className='rounded-5'>Inprogress</Badge></td>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/waitingforpoview`}><i className="fa fa-eye"></i></Link>
                                                    <span>  </span>
                                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>REQ-001</td>
                                                <td>Trichy</td>
                                                <td>Admin</td>
                                                <td>Building for Kg Class Rooms </td>
                                                <td>9,00,000</td>
                                                <td>19-09-2024</td>
                                                <td>Medium</td>
                                                <td><Image src="../assets/images/other-images/school-building-img-1.jpg" alt="Example Image" className='img-width' /></td>
                                                <td><Badge color="warning" className='rounded-5'>Inprogress</Badge></td>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/waitingforpoview`}><i className="fa fa-eye"></i></Link>
                                                    <span>  </span>
                                                    <Link to={Href}><i className="fa fa-edit"></i></Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default WaitingForPo