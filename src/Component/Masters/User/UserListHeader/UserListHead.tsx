import React from 'react'
import { Row, Col } from 'reactstrap'

import CreateNewUserBtn from './CreateNewUserBtn'
import SchoolSearch from '../../SchoolList/SchoolSearch'

const UserListHead = () => {
    return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewUserBtn/>
        </Row>
    )
}

export default UserListHead