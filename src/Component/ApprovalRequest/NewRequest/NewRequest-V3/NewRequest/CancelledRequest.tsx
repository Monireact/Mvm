import React from 'react'
import { Col, Card, CardBody, Row, Badge } from 'reactstrap'
import AdvanceSearch from './AdvanceSearch'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'

const CancelledRequest = () => {
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
                                                <th scope="col">Request</th>
                                                <th scope="col">School</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Budget</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Priority</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Bus Tyre Change</td>
                                                <td>Chetpet</td>
                                                <td>Transport</td>
                                                <td>17,000</td>
                                                <td>15-07-2024</td>
                                                <td>Medium</td>
                                                <td><Badge color="danger" className='rounded-5'>Cancelled By school Admin</Badge></td>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/cancelledrequestview`}><i className="fa fa-eye"></i></Link>
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
        </>)
}

export default CancelledRequest