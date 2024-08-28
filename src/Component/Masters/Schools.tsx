import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Card, Col, Container, Row } from 'reactstrap';
import { MSchools, Masters } from "../../utils/Constant";
import SchoolConfigurationTable, { SchoolList } from '../../Data/Tables/DataTables/Masters_tables/SchoolConfigurationTable';

const BASE_URL = 'http://localhost:8000/api/School/GetById'


const Schools = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MSchools} parent={Masters} />
          <Container fluid>
            <Row>
              <SchoolConfigurationTable/>
            </Row>
          </Container>
        </>
      );  
}

export default Schools