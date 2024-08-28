import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { SearchTableButton } from '../../../../../utils/Constant';
import { H4 } from '../../../../../AbstractElements';
import DataTable from "react-data-table-component";
import { zeroConfigurationColumn, zeroConfigurationData } from '../../../../../Data/Tables/DataTables/BasicInit/BasicInit';
import { Link } from 'react-feather';

const ZeroConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = zeroConfigurationData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-1_filter" className="dataTables_filter d-flex align-items-between">
          {/* <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} /> */}
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card className='mt-2'>
          <CardHeader className="pb-0 card-no-border">
                       
          </CardHeader>
          <CardBody >
            <div className="table-responsive">
              <DataTable columns={zeroConfigurationColumn} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ZeroConfigurationTable