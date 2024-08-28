import React from 'react'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Container, Row } from 'reactstrap';
import { Masters, MTags } from '../../utils/Constant';
import TagsConfigurationTable from '../../Data/Tables/DataTables/Masters_tables/Tags/TagsConfigurationTable';


export const Tags = () => {
    return (
        <>
          <Breadcrumbs mainTitle={MTags} parent={Masters} />
          <Container fluid>
            <Row>
              <TagsConfigurationTable/>
            </Row>
          </Container>
        </>
      );
}
export default Tags