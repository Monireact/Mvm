import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { AddNewUser } from '../../../../utils/Constant'


const CreateNewUserBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/user/createnewuser`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {AddNewUser}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewUserBtn