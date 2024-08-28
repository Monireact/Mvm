import React from 'react'
import { Masters } from '../../../../utils/Constant'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import ConfigurationViewCard from './ConfigurationViewCard'

const ConfigurationViewContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Budget Configuration "} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <ConfigurationViewCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ConfigurationViewContainer