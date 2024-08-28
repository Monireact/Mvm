import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs'
import ChangePasswordForm from './ChangePasswordForm'

const ChangePasswordContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Change Password"} parent={"Change Password"} />
    <Container fluid>
        <Row>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <ChangePasswordForm/>                    
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</>  )
}

export default ChangePasswordContainer