import React from 'react'
import { Container, Row, Col, CardBody, Card } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CancelledRequestViewCard from '../NewRequest/CancelledRequestViewCard'

const CancelledRequestViewContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Cancelled Request"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <CancelledRequestViewCard />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default CancelledRequestViewContainer