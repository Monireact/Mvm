import React from 'react'
import { Container, Row, Col, CardBody, Card } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import SchoolAdminApprovedViewCard from '../NewRequest/SchoolAdminApprovedViewCard'
import QuotedRequestViewCard from '../NewRequest/QuotedRequestViewCard'
import QuoteSubmittedViewCard from '../NewRequest/QuoteSubmittedViewCard'

const QuoteSubmittedViewCardContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Quoted Request"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <QuoteSubmittedViewCard />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default QuoteSubmittedViewCardContainer