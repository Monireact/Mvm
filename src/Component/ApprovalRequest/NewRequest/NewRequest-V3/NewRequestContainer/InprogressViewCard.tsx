import React from 'react'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import InprogressRequest from './InprogressRequest'
import InprogressViewCard from '../NewRequest/InprogressViewCard'

const InprogressViewCardContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Inprogress Request view"} parent={"Request"} /><Container fluid>
        <Row>
            <Col sm="12">
            <Card>
              <CardBody>
                  <InprogressViewCard />
              </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default InprogressViewCardContainer