import React, { useMemo, useState } from 'react'
import { schoolConfigurationColumn, schoolTableData } from './Schools';
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import SchoolListHead from '../../../../Component/Masters/SchoolList/SchoolListHead';
import { VendorTableData, VendorsConfigurationColumn } from './Vendors';
import { LinksConfigurationColumn, LinksTableData } from './Links';
import LinkListHeadContainer from '../../../../Component/Masters/Links/LinksList/LinkListHead';


const LinksConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = LinksTableData.filter((item) => item.schoolName && item.schoolName.toLowerCase().includes(filterText.toLowerCase()));
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
            <LinkListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="table-responsive">
              <DataTable columns={LinksConfigurationColumn} data={filteredItems} pagination subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default LinksConfigurationTable