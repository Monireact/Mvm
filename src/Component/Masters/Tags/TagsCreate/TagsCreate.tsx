import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'
import AddTagFormValidation from './AddTagFormValidation'

const TagsCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Add Tag"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <AddTagFormValidation />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TagsCreateContainer