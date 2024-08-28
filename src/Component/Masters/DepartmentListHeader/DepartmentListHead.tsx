import React from 'react'
import CreateNewDepartmentBtn from './CreateNewDepartmentBtn'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../SchoolList/SchoolSearch'

 const DepartmentListHeadContainer = () => {
  return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewDepartmentBtn/>
        </Row>
    )
}

export default DepartmentListHeadContainer
