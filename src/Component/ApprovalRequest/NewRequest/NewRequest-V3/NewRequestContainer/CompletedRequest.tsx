import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import CompletedRequest from '../NewRequest/CompletedRequest'

const CompletedRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Completed Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <CompletedRequest />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default CompletedRequestContainer