import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, AddCategory, Masters } from '../../../../utils/Constant'
import CreateNewLinkForm from './CreateNewCategoriesForm'
import CreateNewCategoriesForm from './CreateNewCategoriesForm'


const RolesCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddCategory} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewCategoriesForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RolesCreateContainer