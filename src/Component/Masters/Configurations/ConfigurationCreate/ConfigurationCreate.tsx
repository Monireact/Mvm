import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import {Masters } from '../../../../utils/Constant'
import AddConfigurationFormValidation from './AddConfigurationFormValidation'

const ConfigurationCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Add Budget Configuration"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <AddConfigurationFormValidation />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default ConfigurationCreateContainer