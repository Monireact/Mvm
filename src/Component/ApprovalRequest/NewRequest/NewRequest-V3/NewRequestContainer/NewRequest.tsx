import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'
import NewRequest from '../NewRequest/NewRequest'

const NewRequestContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"New Request"} parent={Project} /><Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <NewRequest />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        )
}

export default NewRequestContainer