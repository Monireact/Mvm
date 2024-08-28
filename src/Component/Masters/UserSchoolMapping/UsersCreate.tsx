import { Container, Row, Col, Card, CardBody } from "reactstrap"
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs"

import CreateSchoolMappingForm from "./UserSchoolmapping"
import { Users } from "react-feather"
import { BreadcrubUsers, SchoolMapping } from "../../../utils/Constant"
import UserRoleUserName from "./UserRoleUserName"


const UserCreateContainer = () => {
  return (

    
    <>
      <Breadcrumbs mainTitle={SchoolMapping} parent={BreadcrubUsers} />
      <Container fluid>
        <Row>
       < UserRoleUserName/>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateSchoolMappingForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserCreateContainer