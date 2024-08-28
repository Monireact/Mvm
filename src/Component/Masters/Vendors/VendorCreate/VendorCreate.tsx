import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project, Masters } from '../../../../utils/Constant'
import AddVendorFormValidation from './AddVendorFormValidation'

const VendorCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Add Vendor"} parent={Masters} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <AddVendorFormValidation />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>  
  )
}

export default VendorCreateContainer