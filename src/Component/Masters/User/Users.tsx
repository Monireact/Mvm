import React from 'react'
import { Container, Row } from 'reactstrap';

import UserConfigurationTable from '../../../Data/Tables/DataTables/UsersTable/UserConfigurationTable';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { OUser, OUsers } from '../../../utils/Constant';


const UsersContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={OUsers} parent={OUsers} />
          <Container fluid>
            <Row>
              <UserConfigurationTable/>
            </Row>
          </Container>
        </>
      );

}

export default UsersContainer