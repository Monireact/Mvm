import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, Masters } from '../../../utils/Constant'
import CreateNewDepartmentForm from './CreateNewDepartmentForm'
import AddDepartmentFormValidation from './AddDepartmentFormValidation'

const DepartmentCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Add Department"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <AddDepartmentFormValidation />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DepartmentCreateContainer