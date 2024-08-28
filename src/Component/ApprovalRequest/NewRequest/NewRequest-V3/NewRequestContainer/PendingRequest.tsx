import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import PendingRequest from '../NewRequest/PendingRequest'
import PendingRequestTabContent from '../NewRequest/PendingRequestTabContent'
import PendingRequestSchoolRoleDropdown from '../NewRequest/PendingRequestSchoolRoleDropdown'

const PendingRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Open Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <PendingRequestSchoolRoleDropdown/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <PendingRequestTabContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PendingRequestContainer