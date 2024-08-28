import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import QuotedRequest from '../NewRequest/QuotedRequest'

const QuotedRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Quoted Request"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <QuotedRequest />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default QuotedRequestContainer