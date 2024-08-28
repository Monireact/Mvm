import React from 'react'

import { Row, Col } from 'reactstrap'
import SchoolSearch from '../../SchoolList/SchoolSearch'
import CreateNewCategoriesBtn from './CreateNewCategoriesBtn'

 const CategoriesListHeadContainer = () => {
  return (
        <Row>
            <Col md="6">
                <SchoolSearch/>
            </Col>
            <CreateNewCategoriesBtn/>
        </Row>
    )
}

export default CategoriesListHeadContainer