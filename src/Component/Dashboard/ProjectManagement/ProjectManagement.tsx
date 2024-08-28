import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, ProjectManagement } from "../../../utils/Constant";
import TotalProject from "../Ecommerce/TotalProject/TotalProject";
import AddProject from "../Ecommerce/AddProject/AddProject";

const ContainerProjectManagement = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectManagement} parent={Dashboard} />
      <Container fluid>
        <Row className="size-column">
          <TotalProject />
          <AddProject />
        </Row>
      </Container>
    </>
  );
};

export default ContainerProjectManagement;
