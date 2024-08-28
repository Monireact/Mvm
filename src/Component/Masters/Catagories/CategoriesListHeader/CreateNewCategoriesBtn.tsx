import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

const CreateNewCategoriesBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/categories/createnewcategories`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {"Add Category"}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewCategoriesBtn