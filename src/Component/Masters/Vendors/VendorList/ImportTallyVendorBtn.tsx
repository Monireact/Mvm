import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Href } from '../../../../utils/Constant'

const ImportTallyVendorBtn = () => {
    return (
        <>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-light text-black" to={Href}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {"Import From Tally"}
              </Link>
            </div>
          </Col>
        </>
      )
}

export default ImportTallyVendorBtn