import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import SchoolAdminApproved from '../NewRequest/SchoolAdminApproved'
import BackTo from '../NewRequest/BackTo'

const BackToContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"School Admin Approved"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <BackTo />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BackToContainer