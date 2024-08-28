import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { AddTags } from '../../../../utils/Constant'

const CreateNewTagsBtn = () => {
  return (
    <>
    <Col md="6">
      <div className="text-end">
        <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/tags/createnewtags`}>
          {/* <PlusCircle /> */}
          <i className="fa fa-plus" />  {AddTags}
        </Link>
      </div>
    </Col>
  </>  )
}

export default CreateNewTagsBtn