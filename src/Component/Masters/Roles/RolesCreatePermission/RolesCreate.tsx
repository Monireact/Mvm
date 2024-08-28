import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'
import CreateNewRoleForm from './RolePermission'

const PermissionCreateContainer = () => {
  return (


    <>
      <Breadcrumbs mainTitle={"Roles"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CreateNewRoleForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PermissionCreateContainer