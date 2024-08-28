import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { ApprovalRequest, ANewRequests } from '../../../utils/Constant';
import NewRequestConfigurationTable from '../../../Data/Tables/DataTables/ApprovalRequests/NewRequest/NewRequestConfigurationTable';

const NewRequests = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ANewRequests} parent={ApprovalRequest} />
      <Container fluid>
        <Row>
          <NewRequestConfigurationTable/>
        </Row>
      </Container>
    </>
  );  
}

export default NewRequests