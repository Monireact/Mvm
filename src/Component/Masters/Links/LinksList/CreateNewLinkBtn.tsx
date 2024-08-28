import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { MAddLinks } from '../../../../utils/Constant'

const CreateNewLinkBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/link/createnewlink`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {MAddLinks}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewLinkBtn