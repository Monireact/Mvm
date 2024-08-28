import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Masters } from '../../../../utils/Constant'
import MapRoleListAll from './MapRoleListAll'

const MapRoleListContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Map Role"} parent={Masters} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <MapRoleListAll />
                    </Col>
                </Row>
            </Container>
        </>)
}

export default MapRoleListContainer