import React from 'react'
import { Col, Input, Row } from 'reactstrap';
import PendingRequestRoles from './PendingrequestRoles';
import { SchoolLocation } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput';

const PendingRequestSchoolRoleDropdown = () => {


    return (
        <>
            <Row>
                <Col md="4">
                    <Col md="12">
                        <div className="card-wrapper border rounded-3">
                            <Col sm="12" className="d-flex align-items-center m-5">
                                <Input type="select" className="input-air-primary digits">
                                    {SchoolLocation.map((data, index) => (
                                        <option key={index}>{data}</option>
                                    ))}
                                </Input>
                            </Col>
                        </div>
                    </Col>
                </Col>
                <Col md="8">
                    <PendingRequestRoles />
                </Col>
            </Row>
        </>

    )
}

export default PendingRequestSchoolRoleDropdown