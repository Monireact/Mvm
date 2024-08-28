import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'
import ConfigurationEditForm from './ConfigurationEditForm'

const ConfigurationEditContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Budget Configuration"} parent={Masters} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <ConfigurationEditForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>  )
}

export default ConfigurationEditContainer