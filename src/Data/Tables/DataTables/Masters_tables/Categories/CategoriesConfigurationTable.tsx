import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { CategoriesConfigurationColumn, CategoriesTableData } from './Categories';
import CategoriesListHeadContainer from '../../../../../Component/Masters/Catagories/CategoriesListHeader/CategoriesListHeader';


const CategoriesConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = CategoriesTableData.filter((item) => item.categoryName && item.categoryName.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-between">
        {/* <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} /> */}
      </div>
    );
  }, [filterText]);
  return (
    <>
      <Col sm="12">
        <Card className='mt-0'>
          <CardBody>
            <CategoriesListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
          <Card className='mt-2'>
            <CardBody>
              <div className="table-responsive">
                <DataTable columns={CategoriesConfigurationColumn} data={filteredItems} pagination subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
  );
}

export default CategoriesConfigurationTable