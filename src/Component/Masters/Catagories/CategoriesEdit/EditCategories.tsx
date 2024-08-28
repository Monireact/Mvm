import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'


import EditCategoriesForm from './EditCategoriesForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, Masters } from '../../../../utils/Constant'

const EditCategoriesContainer = () => {
  
  return (
    <>
      <Breadcrumbs mainTitle={"Categories"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <EditCategoriesForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditCategoriesContainer