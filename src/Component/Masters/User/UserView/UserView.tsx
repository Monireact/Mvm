import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'

import UserViewCard from './UserViewCard'
import { Users } from 'react-feather'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BreadcrubUsers, EditUser, ViewUser } from '../../../../utils/Constant'

const UserViewContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={ViewUser} parent={BreadcrubUsers}/>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <UserViewCard />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  )
}

export default UserViewContainer