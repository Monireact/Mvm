import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestFrontTyreChange from '../NewRequestViewCard1/NRBusFrontTyreChange'
import NewRequestMoreInfoRequest from '../NewRequestViewCard1/NewRequestMoreInfoRequest'

const NRMoreInfoRequest = () => {
  return (
    <>
    <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequestMoreInfoRequest />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default NRMoreInfoRequest