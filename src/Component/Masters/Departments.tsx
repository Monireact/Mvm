import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import { MDepartments, Masters } from '../../utils/Constant';
import DepartmentConfigurationTable from '../../Data/Tables/DataTables/Masters_tables/DepartmentConfigurationTable ';

const Departments = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MDepartments} parent={Masters} />
          <Container fluid>
            <Row>
             <DepartmentConfigurationTable/>
            </Row>
          </Container>
        </>
      );
}

export default Departments