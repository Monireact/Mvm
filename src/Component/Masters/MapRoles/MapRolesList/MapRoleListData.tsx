import { Link } from "react-router-dom";
import { TableColumn } from "react-data-table-component";
import { UL, P,Image, Btn} from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { TableActionType } from "../../../../Types/ApprovalRequest/Request";
import { SchoolListTableProduct, SchoolConfigurationTableColumnsType, MapRoleConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";


export const schoolListData = [
  {
    id:1,
    userName: "Suresh",
    phoneNumber: "9214579886",
    emailId: "suresh123@gmail.com",
    departments: "Department Head",
    roles: "-",
    action:""
  },
  {
    id:2,
    userName: "Girish",
    phoneNumber: "9952976585",
    emailId: "girish@gmail.com",
    departments: "Department Head",
    roles: "Committee Member",
    action:""
  },
  {
    id:3,
    userName: "Arjun",
    phoneNumber: "783978562",
    emailId: "arjun@gmail.com",
    departments: "  Department Head",
    roles: "AO",
    action:""
  },
  {
    id:4,
    userName: "Harsha ",
    phoneNumber: "9874236512",
    emailId: "harsha@gmail.com",
    departments: "  Department Head",
    roles: "School Admin",
    action:""
  },
  {
    id:5,
    userName: "Vijay",
    phoneNumber: "7423698452",
    emailId: "vijay@gmail.com",
    departments: "  Department Head",
    roles: "-",
    action:""
  },
  
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/masters/roles/maprolescreate`}>
        <Btn color="primary">{"Map Role"}</Btn></Link>
      </div>
    </UL>
  );
};



export const MapRoleConfigurationColumn:TableColumn<MapRoleConfigurationTableColumnsType>[] = [

  {
    name: "Name",
    selector: (row) => row["userName"],
    sortable: true,
  },
  {
    name: "Mobile Number",
    selector: (row) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "Email id",
    selector: (row) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Roles",
    selector: (row) => `${row.roles}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => <TableAction id={row.action} />,
    sortable: true,
  },
];