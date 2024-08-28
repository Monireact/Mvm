import React from 'react'
import { Container, Row, Col, CardBody, Card } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import SchoolAdminApprovedViewCard from '../NewRequest/SchoolAdminApprovedViewCard'

const SchoolAdminApprovedViewContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"School Admin Approved"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <SchoolAdminApprovedViewCard />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default SchoolAdminApprovedViewContainer