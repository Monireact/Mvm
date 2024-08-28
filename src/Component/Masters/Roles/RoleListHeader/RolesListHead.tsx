import React from 'react'

import { Row, Col } from 'reactstrap'
import CreateNewRolesBtn from './CreateNewRolesBtn'
import SchoolSearch from '../../SchoolList/SchoolSearch'

 const RolesListHeadContainer = () => {
  return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewRolesBtn/>
        </Row>
    )
}

export default RolesListHeadContainer
