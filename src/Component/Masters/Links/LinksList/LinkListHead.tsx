import React from 'react'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../SchoolList/SchoolSearch'
import CreateNewLinkBtn from './CreateNewLinkBtn'

const LinkListHeadContainer = () => {
    return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewLinkBtn/>
        </Row>
    )
}

export default LinkListHeadContainer