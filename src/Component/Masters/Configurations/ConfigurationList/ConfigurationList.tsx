import React from 'react'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../SchoolList/SchoolSearch'
import ConfigurationAddBtn from './ConfigurationAddBtn'

const ConfigurationList = () => {
  return (
    <Row>
    <Col md="6">
        <SchoolSearch/>
    </Col>
    <ConfigurationAddBtn/>
</Row>  )
}

export default ConfigurationList