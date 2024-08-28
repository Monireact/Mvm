import React from 'react'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../../../Masters/SchoolList/SchoolSearch'
import AdvanceSearchButton from './AdvanceSearchButton'

const AdvanceSearch = () => {
    return (
        <Row>
            <Col md="6">
                <SchoolSearch />
            </Col>
            <AdvanceSearchButton />
        </Row>)
}

export default AdvanceSearch