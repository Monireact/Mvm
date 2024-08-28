import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import LinksViewCard from './CategoriesViewCard'
import CategoriesViewCard from './CategoriesViewCard'
import { Masters } from '../../../../utils/Constant'

const CategoriesViewContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={"Categories"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CategoriesViewCard />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default CategoriesViewContainer