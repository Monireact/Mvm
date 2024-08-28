import React from 'react'
import CreateNewVendorBtn from './CreateNewVendorBtn'
import SchoolSearch from '../../SchoolList/SchoolSearch'
import { Col, Row } from 'reactstrap'
import ImportTallyVendorBtn from './ImportTallyVendorBtn'

const VendorListHeadContainer = () => {
    return (
        <Row>
            <Col md="">
                <SchoolSearch/>
            </Col>
            <CreateNewVendorBtn/>
        </Row>
    )
}

export default VendorListHeadContainer