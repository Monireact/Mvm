import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { APendingRequests, ApprovalRequest } from '../../../utils/Constant';
import PendingRequestConfigurationTable from '../../../Data/Tables/DataTables/ApprovalRequests/PendingRequest/PendingRequestConfigurationTable';

const PendingRequests = () => {
  return (
    <>
      <Breadcrumbs mainTitle={APendingRequests} parent={ApprovalRequest} />
      <Container fluid>
        <Row>
          <PendingRequestConfigurationTable/>
        </Row>
      </Container>
    </>
  ); 
}

export default PendingRequests