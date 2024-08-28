import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import { MLinks, Masters } from '../../utils/Constant';
import LinksConfigurationTable from '../../Data/Tables/DataTables/Masters_tables/LinksConfigurationTable';

const Links = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MLinks} parent={Masters} />
          <Container fluid>
            <Row>
            <LinksConfigurationTable/>
            </Row>
          </Container>
        </>
      );
}

export default Links