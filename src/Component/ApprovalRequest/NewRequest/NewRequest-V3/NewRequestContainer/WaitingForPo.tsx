import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import InprogressRequest from '../NewRequest/InprogressRequest'
import WaitingForPo from '../NewRequest/WaitingForPo'

const WaitingForPoContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Inprogress Request"} parent={"Request"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <WaitingForPo />
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default WaitingForPoContainer