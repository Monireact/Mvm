import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequestList from '../NewRequest/NewRequestList'

const NewRequestListContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"New Request "} parent={"Requests"} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <NewRequestList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewRequestListContainer