import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'



import EditRolesForm from './EditRoleForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'

const EditRolesContainer = () => {
  
  return (
    <>
      <Breadcrumbs mainTitle={"Role"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <EditRolesForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditRolesContainer