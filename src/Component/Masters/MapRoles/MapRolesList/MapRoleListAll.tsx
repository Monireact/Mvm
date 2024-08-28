import React from 'react'
import CreateNewSchool from './MapRoleBtn'
import SchoolListTable from './MapRoleListTable'
import { Row, Col, Card, CardBody } from 'reactstrap'
import MapRoleSearch from './MapRoleSearch'
import MapRoleCreate from './MapRoleBtn'

const MapRoleListAll = () => {
    return (

        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col sm="12">
                            <MapRoleSearch />
                        </Col>
                        {/* <MapRoleCreate /> */}
                    </Row>
                </CardBody>
            </Card>
            <SchoolListTable />
        </>
    )
}

export default MapRoleListAll