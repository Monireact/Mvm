import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import { ACancelledRequets, ApprovalRequest } from '../../../utils/Constant';
import CancelledRequestConfigurationTable from '../../../Data/Tables/DataTables/ApprovalRequests/CancelledRequest/CancelledRequestConfigurationTable';

const CancelledRequests = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ACancelledRequets} parent={ApprovalRequest} />
      <Container fluid>
        <Row>
          <CancelledRequestConfigurationTable/>
        </Row>
      </Container>
    </>
  );
}

export default CancelledRequests