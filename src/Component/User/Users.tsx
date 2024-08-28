import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import   {  Masters, OUser,OUsers }  from '../../utils/Constant';
import UserConfigurationTable from '../../Data/Tables/DataTables/UsersTable/UserConfigurationTable';

const UsersContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={OUsers} parent={Masters} />
          <Container fluid>
            <Row>
              <UserConfigurationTable/>
            </Row>
          </Container>
        </>
      );

}

export default UsersContainer