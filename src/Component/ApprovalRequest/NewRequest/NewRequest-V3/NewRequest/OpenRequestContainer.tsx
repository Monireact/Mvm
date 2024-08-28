import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import OpenRequest from './OpenRequestTable'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
// import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
// import { ProjectCreates, Project } from '../../../../../utils/Constant'
// import PendingRequest from '../NewRequest/PendingRequest'

const OpenRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Open Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <OpenRequest />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default OpenRequestContainer