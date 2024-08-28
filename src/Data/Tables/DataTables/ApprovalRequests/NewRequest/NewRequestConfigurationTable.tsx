import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { NewRequestConfigurationColumn, NewRequestTableData } from './NewRequest';
import NewRequestListHeadContainer from '../../../../../Component/ApprovalRequest/NewRequest/NewRequestHeader/NewRequestListHead';
import NRStaticTable from '../../../../../Component/ApprovalRequest/NewRequest/NewRequest/NewRequestStaticTable.tsx/NRStaticTable';


const NewRequestConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = NewRequestTableData.filter((item) => item.school && item.school.toLowerCase().includes(filterText.toLowerCase()));
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
            <NewRequestListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="table-responsive">
              <NRStaticTable />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default NewRequestConfigurationTable