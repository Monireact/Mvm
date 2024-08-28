import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import QuotedRequest from '../NewRequest/QuotedRequest'
import QuoteSubmitted from '../NewRequest/QuoteSubmitted'

const QuoteSubmitedContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Quote Submitted"} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <QuoteSubmitted/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default QuoteSubmitedContainer