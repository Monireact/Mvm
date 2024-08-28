import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import DataTable from "react-data-table-component";
import { DepartmentConfigurationColumn, DepartmentTableData } from './Departments';
import DepartmentListHeadContainer from '../../../../Component/Masters/DepartmentListHeader/DepartmentListHead';


const DepartmentConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = DepartmentTableData.filter((item) => item.departments && item.departments.toLowerCase().includes(filterText.toLowerCase()));
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
            <DepartmentListHeadContainer />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
          <Card className='mt-2'>
            <CardBody >
              <div className="table-responsive ">
                <DataTable columns={DepartmentConfigurationColumn} data={filteredItems} pagination subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
  );
}

export default DepartmentConfigurationTable