import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewrequestUpoloadQuote from '../NewRequestViewCard1/NewrequestUpoloadQuote'

const NewRequestUploadQuoteContainer = () => {
  return (
<>
      <Breadcrumbs mainTitle={"Upload Quotes"} parent={"Requests"} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="g-3">
                  <NewrequestUpoloadQuote />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>   )
}

export default NewRequestUploadQuoteContainer