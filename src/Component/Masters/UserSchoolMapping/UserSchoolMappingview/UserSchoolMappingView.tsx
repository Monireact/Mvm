import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, RoleMap, BreadcrubUsers } from '../../../../utils/Constant'
import RoleMapViewCard from './UseSchoolMappingViewCard'


const UserRolemapViewContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={BreadcrubUsers} parent={RoleMap} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <RoleMapViewCard />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>     )
}

export default UserRolemapViewContainer