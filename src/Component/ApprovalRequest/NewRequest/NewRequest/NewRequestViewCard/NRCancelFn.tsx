import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestCancelFn from '../NewRequestViewCard1/NewRequestCancelFn'

const NRCancelFnContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequestCancelFn />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default NRCancelFnContainer