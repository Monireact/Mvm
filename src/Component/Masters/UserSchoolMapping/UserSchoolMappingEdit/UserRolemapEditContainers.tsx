import React from 'react'
// import EditVendorForm from './EditVendorForm'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, RoleMap, Users } from '../../../../utils/Constant'
import UserRoleMapForm from './UserRoleMapEdit'

const UserRoleMapEditContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RoleMap} parent={Users} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <UserRoleMapForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserRoleMapEditContainer