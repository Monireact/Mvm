import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import RolesConfigurationTable from "../../../Data/Tables/DataTables/Masters_tables/roles/RoleConfigurationTable";
import { Masters } from "../../../utils/Constant";

const RolesContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={"Roles"} parent={Masters} />
      <Container fluid>
        <Row>
          <RolesConfigurationTable />
        </Row>
      </Container>
    </>
  );
};

export default RolesContainer;
