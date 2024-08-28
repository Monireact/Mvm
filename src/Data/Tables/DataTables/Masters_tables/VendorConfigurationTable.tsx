import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { VendorTableData, VendorsConfigurationColumn } from './Vendors';
import VendorListHeadContainer from '../../../../Component/Masters/Vendors/VendorList/VendorListHead';


const VendorConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = VendorTableData.filter((item) => item.vendorName && item.vendorName.toLowerCase().includes(filterText.toLowerCase()));
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
            <VendorListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="table-responsive">
              <DataTable columns={VendorsConfigurationColumn} data={filteredItems} pagination subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default VendorConfigurationTable