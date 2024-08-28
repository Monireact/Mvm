import React from 'react'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../Masters/SchoolList/SchoolSearch'
import CreateNewUserBtn from './CreateNewUserBtn'

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