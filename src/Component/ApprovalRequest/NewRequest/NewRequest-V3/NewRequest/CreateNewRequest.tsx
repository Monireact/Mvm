import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import NewRequestForm from './NewRequestForm'

const CreateNewRequestContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"New Request"} parent={"Request"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <NewRequestForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </> 
     )
}

export default CreateNewRequestContainer