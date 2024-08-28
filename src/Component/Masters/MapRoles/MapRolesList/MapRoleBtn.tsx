import React from 'react'
import { Link } from 'react-router-dom'
import { Col, } from 'reactstrap'

const MapRoleCreate = () => {
  return (
    <>
      <Col md="6">
        <div className="text-end">
          <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/roles/maprolescreate`}>
            <i className="fa fa-plus" />  {"Map Role"}
          </Link>
        </div>
      </Col>
    </>
  )
}

export default MapRoleCreate