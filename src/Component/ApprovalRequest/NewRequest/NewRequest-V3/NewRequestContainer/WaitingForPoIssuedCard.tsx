import React from 'react'
import WaitingForPoIssuedCard from '../NewRequest/WaitingForPoIssuedCard'
import { Container, Row, Col, CardBody, Card } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const WaitingForPoIssuedCardContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Inprogress Request"} parent={"Request"} /><Container fluid>
        <Row>
            <Col sm="12">
            <Card>
              <CardBody>
              <WaitingForPoIssuedCard/>            
              </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>
</>
  )
}

export default WaitingForPoIssuedCardContainer