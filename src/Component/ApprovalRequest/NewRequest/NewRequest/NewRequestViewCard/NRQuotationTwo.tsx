import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestQuotationTwo from '../NewRequestViewCard1/NewRequestQuotationTwo'

const NRQuotationTwoContainer = () => {
  return (
<>
    <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequestQuotationTwo />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>  )
}

export default NRQuotationTwoContainer