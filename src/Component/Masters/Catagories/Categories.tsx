import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import {  Masters } from '../../../utils/Constant';
import CategoriesConfigurationTable from '../../../Data/Tables/DataTables/Masters_tables/Categories/CategoriesConfigurationTable';


const   Categories = () => {
    return (
        <>
          <Breadcrumbs mainTitle={"Categories"} parent={Masters} />
          <Container fluid>
            <Row>
             <CategoriesConfigurationTable/>
            </Row>
          </Container>
        </>
      );
}

export default Categories