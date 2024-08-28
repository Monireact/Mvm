import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { AddRequest } from '../../../../utils/Constant'

const CreateNewRequestBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/approvalrequest/createnewrequest`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {AddRequest}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewRequestBtn