import React from 'react'
import NewRequetsViewQuotation from '../NewRequestViewCard1/NewRequetsViewQuotation'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequetsViewUploadQuotation from '../NewRequestViewCard1/NewRequetsViewUploadQuotation'

const NRViewUploadQuotationContainer = () => {
  return (
<>
    <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequetsViewUploadQuotation />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>  )
}

export default NRViewUploadQuotationContainer