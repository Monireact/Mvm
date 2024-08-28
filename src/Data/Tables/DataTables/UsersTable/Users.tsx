import { Link } from "react-router-dom";

import { Btn, LI, UL } from "../../../../AbstractElements";
import { Href, UserSchoolMaping } from "../../../../utils/Constant";
import { TableActionType } from "../../../../Types/ApprovalRequest/Request";
import { UsersConfigurationTableColumnsType } from "../../../../Types/UsersType/Users";


export const UsersTableData = [

  {
    id:1,
    name: "Suresh.A",
    phoneNumber: "9214579886",
    emailId: "suresh123@gmail.com",
    departments: "  Department Head",
    action:""
  },
  {
    id:2,
    name: "Girish",
    phoneNumber: "9952976585",
    emailId: "girish@gmail.com",
    departments: "  Department Head",
    action:""
  },
  {
    id:3,
    name: "Arjun",
    phoneNumber: "783978562",
    emailId: "arjun@gmail.com",
    departments: "  Department Head",
    action:""
  },
  {
    id:4,
    name: "Harsha ",
    phoneNumber: "9874236512",
    emailId: "harsha@gmail.com",
    departments: "  Department Head",
    action:""
  },
  {
    id:5,
    name: "Vijay",
    phoneNumber: "7423698452",
    emailId: "vijay@gmail.com",
    departments: "  Department Head",
    action:""
  },
  

];

const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
    <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/user/userview`}>
        <i className="fa fa-eye"></i>
      </Link>
    </div>
    <div className="edit">
      <Link to={`${process.env.PUBLIC_URL}/user/useredit`}>
        <i className="icon-pencil-alt" />
      </Link>
    </div>
    {/* <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/Users/schoolmapping`}>
          <Btn className="btn btn-secondary btn-sm py-1 px-2 " href={Href}>
          {UserSchoolMaping}
          </Btn>
        </Link>
      </div> */}
  </UL>
  );
};


export const UsersConfigurationColumn = [
  {
    name: "Name",
    selector: (row: UsersConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: UsersConfigurationTableColumnsType) => `${row.emailId}`,
    sortable: true,
  },
 
  
  {
    name: "Action",
    cell: (row: UsersConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];