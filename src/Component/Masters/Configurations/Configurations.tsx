import React from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import {Masters } from '../../../utils/Constant';
import ConfigurationsTable from '../../../Data/Tables/DataTables/Masters_tables/Configurations/ConfigurationsTable';

const ConfigurationsContainer = () => {
    return (
        <>
          <Breadcrumbs mainTitle={"Budget Configuration"} parent={Masters} />
          <Container fluid>
            <Row>
              <ConfigurationsTable/>
            </Row>
          </Container>
        </>
      );
}

export default ConfigurationsContainer