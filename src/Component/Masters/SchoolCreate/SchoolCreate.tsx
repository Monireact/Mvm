import React from 'react'
import { Card, Row, Col, CardBody, Container } from 'reactstrap'
import { Masters } from '../../../utils/Constant'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import AddSchoolFormValidation from './AddSchoolFormValidation'


const SchoolCreate = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Add School"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <AddSchoolFormValidation />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SchoolCreate