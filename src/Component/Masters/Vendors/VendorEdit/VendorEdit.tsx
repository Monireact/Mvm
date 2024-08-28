import React from 'react'
import EditVendorForm from './EditVendorForm'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../utils/Constant'

const VendorEditContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Edit Vendor"} parent={"Masters"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <EditVendorForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default VendorEditContainer