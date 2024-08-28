import React from 'react'
import CompletedRequestViewCard from '../NewRequest/CompletedRequestViewCard'
import { Container, Row, Col } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const CompeletedRequestViewCardContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={"Completed Request"} parent={"Requests"} /><Container fluid>
        <Row>
            <Col sm="12">
            <CompletedRequestViewCard/>
            </Col>
        </Row>
    </Container>
</>
  )
}

export default CompeletedRequestViewCardContainer