import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../utils/Constant'
import CancelledRequestViewCard from '../../NewRequest/NewRequest-V3/NewRequest/CancelledRequestViewCard'

const CancelledRequestViewContainer = () => {
  return (
<>
          <Breadcrumbs mainTitle={"Cancelled Request"} parent={"Requests"} />
          <Container fluid>
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
        </>     )
}

export default CancelledRequestViewContainer