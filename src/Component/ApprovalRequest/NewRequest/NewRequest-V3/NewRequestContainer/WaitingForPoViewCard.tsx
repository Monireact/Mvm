import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import InprogressRequest from '../NewRequest/InprogressRequest'
import WaitingForPoViewCard from '../NewRequest/WaitingForPoViewCard'

const WaitingForPoViewCardContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Inprogress Request"} parent={"Request"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <WaitingForPoViewCard />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default WaitingForPoViewCardContainer