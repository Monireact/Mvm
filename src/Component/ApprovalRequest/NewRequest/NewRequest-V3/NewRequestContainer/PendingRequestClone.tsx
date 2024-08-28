import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import PendingRequest from '../NewRequest/PendingRequest'
import PendingRequestClone from '../NewRequest/PendingRequestClone'

const PendingRequestCloneContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Open Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <PendingRequestClone />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default PendingRequestCloneContainer