import React from 'react'
// import { PlusCircle } from 'react-feather'
import { Link } from 'react-router-dom'

import { Col, } from 'reactstrap'
import { MAddSchools } from '../../../utils/Constant'

const CreateNewSchool = () => {
  return (
    <>
      <Col md="6">
        <div className="text-end">
          <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/school/createnew`}>
            {/* <PlusCircle /> */}
            <i className="fa fa-plus" />  {MAddSchools}
          </Link>
        </div>
      </Col>
    </>
  )
}

export default CreateNewSchool