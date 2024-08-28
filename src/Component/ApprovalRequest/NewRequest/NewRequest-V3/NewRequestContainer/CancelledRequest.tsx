import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import CancelledRequest from '../NewRequest/CancelledRequest'

const CancelledRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Cancelled Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <CancelledRequest />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CancelledRequestContainer