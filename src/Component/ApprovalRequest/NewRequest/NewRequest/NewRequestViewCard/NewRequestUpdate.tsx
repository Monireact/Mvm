import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestUpdateHistory from '../NewRequestViewCard1/NewRequestUpdateHistory'

const NewRequestUpdateContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="g-3">
                  <NewRequestUpdateHistory />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default NewRequestUpdateContainer