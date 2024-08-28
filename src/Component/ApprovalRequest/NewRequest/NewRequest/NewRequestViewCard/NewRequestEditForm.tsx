import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import EditNewRequestContainer from '../EditNewRequestFrom'

const NewRequestEditFormContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Edit Request"} parent={"New Request"} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <EditNewRequestContainer />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default NewRequestEditFormContainer