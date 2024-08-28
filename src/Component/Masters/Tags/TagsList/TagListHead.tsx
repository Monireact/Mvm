import React from 'react'
import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../SchoolList/SchoolSearch'
import CreateNewTagsBtn from './CreateNewTagsBtn'

const TagListHead = () => {
  return (
    <Row>
    <Col md="6">
        <SchoolSearch/>
    </Col>
    <CreateNewTagsBtn/>
</Row>  )
}

export default TagListHead