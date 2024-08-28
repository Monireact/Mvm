import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../utils/Constant'
import CreateNewRequestForm from './CreateNewRequestForm'

const NewRequestCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"New Request"} parent={"Request"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewRequestForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </> 
     )
}

export default NewRequestCreateContainer