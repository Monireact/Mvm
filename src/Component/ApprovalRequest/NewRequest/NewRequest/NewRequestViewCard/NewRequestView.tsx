import React from 'react'
import { Row, Col, Card, CardBody, Container } from 'reactstrap'
import NewRequestDetail from './NewRequestDetail'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'

const NewRequestView = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Request: Bus Tyre Change"} parent={"Requests"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="g-3">
                  <NewRequestDetail />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewRequestView