import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'

import UserEditForm from './UserEditForm'
import { BreadcrubUsers, EditUser } from '../../../../utils/Constant'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const UserEditContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={EditUser} parent={BreadcrubUsers} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <UserEditForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>   )
}

export default UserEditContainer