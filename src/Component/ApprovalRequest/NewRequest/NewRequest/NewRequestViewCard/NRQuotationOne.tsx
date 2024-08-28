import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestQuotationOne from '../NewRequestViewCard1/NewRequestQuotationOne'

const NRQuotationOneContainer = () => {
  return (
<>
    <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <NewRequestQuotationOne />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>  )
}

export default NRQuotationOneContainer