import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import UpdateMoreInfo from '../NewRequest/UpdateMoreInfo'

const UpdateMoreInfoContainer = () => {
  return (
<>
    <Breadcrumbs mainTitle={"School Admin Approved"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <UpdateMoreInfo />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default UpdateMoreInfoContainer