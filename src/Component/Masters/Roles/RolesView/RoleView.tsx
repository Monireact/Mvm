import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'

import RolesViewCard from './RoleViewCard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'

const RolesViewContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={"Role"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <RolesViewCard />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default RolesViewContainer