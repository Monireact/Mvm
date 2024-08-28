import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { AOldRequests, ApprovalRequest } from '../../../utils/Constant';
import OldRequestConfigurationTable from '../../../Data/Tables/DataTables/ApprovalRequests/OldRequest/OldRequestConfigurationTable';

const OldRequests = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AOldRequests} parent={ApprovalRequest} />
      <Container fluid>
        <Row>
          <OldRequestConfigurationTable/>
        </Row>
      </Container>
    </>
  );  
}

export default OldRequests