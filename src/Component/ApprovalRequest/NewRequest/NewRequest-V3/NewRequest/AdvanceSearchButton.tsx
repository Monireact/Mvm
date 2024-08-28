import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Href } from '../../../../../utils/Constant'

const AdvanceSearchButton = () => {
    return (
        <>
            <Col md="6">
                <div className="text-end">
                    <Link className="btn btn-primary text-white" to={Href}>
                        <i className="fa fa-plus" />  {"Advanced Search"}
                    </Link>
                </div>
            </Col>
        </>
    )
}



export default AdvanceSearchButton