import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, Masters } from '../../../utils/Constant'
import DepartmentViewCardContainer from './DepartmentViewCard'

const DepartmentView = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Department View"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <DepartmentViewCardContainer />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  
  )
}

export default DepartmentView