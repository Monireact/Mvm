import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { OldRequestConfigurationColumn, OldRequestTableData } from './OldRequest';


const OldRequestConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = OldRequestTableData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
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
          <Card>
            <CardBody>
              <div className="table-responsive">
                <DataTable columns={OldRequestConfigurationColumn} data={filteredItems} pagination  subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div>
            </CardBody>
          </Card>
      </Col>
      </>
      );
}

export default OldRequestConfigurationTable