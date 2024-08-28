import React from 'react'
import { Col, Row } from 'reactstrap'
import CreateNewRequestBtn from './CreateNewRequestBtn'
import SchoolSearch from '../../../Masters/SchoolList/SchoolSearch'

const NewRequestListHeadContainer = () => {
    return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewRequestBtn/>
        </Row>
    )
}

export default NewRequestListHeadContainer