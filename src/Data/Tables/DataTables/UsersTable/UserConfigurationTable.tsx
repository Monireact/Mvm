import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { UsersConfigurationColumn, UsersTableData } from './Users';
import UserListHead from '../../../../Component/User/UserListHeader/UserListHead';
import UserList from '../../../../Pages/User/UserList';


const UserConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = UsersTableData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
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
            <UserList />
          </CardBody>
        </Card>
      </Col>
      <Col sm="12">
          <Card>
            <CardBody>
              <div className="table-responsive">
                <DataTable columns={UsersConfigurationColumn} data={filteredItems} pagination  subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div>
            </CardBody>
          </Card>
      </Col>
      </>
      );
}

export default UserConfigurationTable