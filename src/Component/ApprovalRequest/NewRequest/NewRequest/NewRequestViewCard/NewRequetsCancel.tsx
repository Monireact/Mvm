import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestCancelCard from '../NewRequestViewCard1/NewRequestCancelCard'

const NewRequetsCancelContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="g-3">
                  <NewRequestCancelCard />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default NewRequetsCancelContainer