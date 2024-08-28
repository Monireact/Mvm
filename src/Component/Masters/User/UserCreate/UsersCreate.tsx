import React from 'react'
import CreateNewUserForm from './CreateNewUserForm'

import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { AddUser, Users } from '../../../../utils/Constant'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'


const UsersCreate = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddUser} parent={Users} />
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