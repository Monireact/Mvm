import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import SchoolAdminApproved from '../NewRequest/SchoolAdminApproved'

const SchoolAdminApprovedContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"School Admin Approved"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <SchoolAdminApproved />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SchoolAdminApprovedContainer