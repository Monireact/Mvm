import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Add, Cancel, } from '../../../../utils/Constant'



const RoleSaveBtn = () => {
  return (
    <Row >
      <Col >
        <div >
          <Link to={`${process.env.PUBLIC_URL}/masters/roles`}>
            <Btn color="primary" className="me-3">{"Save"}</Btn>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/masters/roles`}>
            <Btn color="light">{Cancel}</Btn>
          </Link>
        </div>
      </Col>
    </Row>)
}

export default RoleSaveBtn