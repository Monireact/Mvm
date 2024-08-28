import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

const ConfigurationAddBtn = () => {
  return (
<>
          <Col md="6">
            <div className="text-end">
              <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/masters/configuration/configurationaddform`}>
                {/* <PlusCircle /> */}
                <i className="fa fa-plus" />  {"Add budget Configuration"}
              </Link>
            </div>
          </Col>
        </>    
    )
}

export default ConfigurationAddBtn