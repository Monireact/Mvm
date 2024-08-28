import React, { useEffect, useMemo, useState } from 'react'
import { schoolConfigurationColumn, schoolTableData } from './Schools';
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import SchoolListHeadContainer from '../../../../Component/Masters/SchoolList/SchoolListHead';
import { Link } from 'react-router-dom';

export interface SchoolList {
  id?: string;
  schoolcode: string;
  location: string;
  emailid: string;
  mobilenumber: number;
  address: string;
  image: null;
}

const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
console.log("test")
console.log(baseApiUrl)


const SchoolConfigurationTable: React.FC = () => {
  const [items, setItems] = useState<SchoolList[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${baseApiUrl}/School/GetById`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'read' }),
        });
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchItems();
  }, []);
    
  return (
    <>
      <Col sm="12">
        <Card className='mt-0'>
          <CardBody>
            <SchoolListHeadContainer />
          </CardBody>
        </Card>
      </Col>

      <Col sm="12">
        <Card>
          <CardBody>
            {/* <div className="table-responsive">
                <DataTable columns={schoolConfigurationColumn} data={filteredItems} pagination  subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
              </div> */}
            <div className="table-responsive">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>School Name</th>
                    <th>School Code</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((school: any) => (
                    <tr key={school._id}>
                      <td>{school.image}</td>
                      <td>{school.location}</td>
                      <td>{school.schoolcode}</td>
                      <td>{school.emailid}</td>
                      <td>{school.mobilenumber}</td>
                      <td className='d-flex gap-2'>
                        <Link to={''}><i className="fa fa-eye" aria-hidden="true"></i></Link>
                        <Link to={`${process.env.PUBLIC_URL}/masters/school/edit/${school._id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default SchoolConfigurationTable