import React from 'react'
import { Container, Row, Col, CardBody, Card } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import SchoolAdminApprovedViewCard from '../NewRequest/SchoolAdminApprovedViewCard'
import BackToViewCard from '../NewRequest/BackToViewCard'

const BackToViewContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"School Admin Approved"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <BackToViewCard />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default BackToViewContainer