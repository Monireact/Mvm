import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestQuotation from '../NewRequestViewCard1/NewRequestQuotation'
import NewRequestUploadQuote from '../NewRequestViewCard1/NewRequestUploadQuoteView'

const NRUploadQuoteContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Requested Quote"} parent={"Requests"} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequestUploadQuote />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default NRUploadQuoteContainer