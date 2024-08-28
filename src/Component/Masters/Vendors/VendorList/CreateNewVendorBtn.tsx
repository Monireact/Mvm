import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Href, MAddVendors } from '../../../../utils/Constant'

const CreateNewVendorBtn = () => {
    return (
        <>
          <Col md="">
            <div className="text-end">
            <Link className="btn btn-light text-black me-3" to={Href}>
                {/* <PlusCircle /> */}
                <i className="fa fa-download"/>  {"Import From Tally"}
              </Link>
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/vendor/createnewVendors`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {MAddVendors}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default CreateNewVendorBtn