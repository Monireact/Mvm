import React from 'react'
import CreateNewUserForm from './CreateNewUserForm'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { ProjectCreates, Project } from '../../../utils/Constant'

const UsersCreate = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              <CreateNewUserForm/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UsersCreate