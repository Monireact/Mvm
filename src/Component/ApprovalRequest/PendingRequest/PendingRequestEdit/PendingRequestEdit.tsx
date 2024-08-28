import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../utils/Constant'
import PendingRequestEditForm from './PendingRequestEditForm'

const PendingRequestEditContainer = () => {
  return (
<>
          <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
          <Container fluid>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <PendingRequestEditForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>   )
}

export default PendingRequestEditContainer