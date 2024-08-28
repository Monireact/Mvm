import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Add, Cancel, Update } from '../../../../utils/Constant'

const NewRequestButtonSection = () => {
    return (
        <Row className="justify-content-center">
          <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
            <div className="text-end offset-sm-1">
            <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequest`}>
              <Btn color="primary" className="me-3">{Update}</Btn>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequest`}>
                <Btn color="light">{Cancel}</Btn>
              </Link>
            </div>
          </Col>
        </Row>
      )

}

export default NewRequestButtonSection