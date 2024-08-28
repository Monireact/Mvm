import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, Masters } from '../../../utils/Constant'
import EditNewSchoolForm from './EditNewSchoolForm'

const SchoolEditContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Edit School"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <EditNewSchoolForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SchoolEditContainer