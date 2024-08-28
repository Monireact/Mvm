import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Container, Row } from 'reactstrap'
import { MVendors, Masters } from '../../utils/Constant'
import VendorConfigurationTable from '../../Data/Tables/DataTables/Masters_tables/VendorConfigurationTable'

const Vendors = () => {
    return(
    <>
    <Breadcrumbs mainTitle={MVendors} parent={Masters} />
    <Container fluid>
      <Row>
        <VendorConfigurationTable/>
      </Row>
    </Container>
  </>
);
}

export default Vendors