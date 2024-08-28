
import { Row, Col } from "reactstrap"
import { Btn } from "../../../AbstractElements"
import { Cancel } from "../../../utils/Constant"
import { Link } from "react-router-dom"





const UserRoleMapSaveBtn = () => {
  return (
    <Row className="justify-content-center">
    <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
      <div className="text-end offset-sm-1">
      <Link to={`${process.env.PUBLIC_URL}/masters/Users/rolemap`}>
        <Btn color="primary" className="me-3">{"Save"}</Btn>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/user/users`}>
          <Btn color="light">{Cancel}</Btn>
        </Link>
      </div>
    </Col>
  </Row>  )
}

export default UserRoleMapSaveBtn