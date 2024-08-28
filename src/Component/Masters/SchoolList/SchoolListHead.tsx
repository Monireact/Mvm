import React from 'react'
import { Row, Col } from 'reactstrap'
import CreateNewSchool from './CreateNewSchool'
import SchoolSearch from './SchoolSearch'

const SchoolListHeadContainer = () => {
  return (
    <Row>
      <Col md="6">
        <SchoolSearch />
      </Col>
        <CreateNewSchool />
    </Row>
  )
}

export default SchoolListHeadContainer