import { Link } from "react-router-dom";
import { LI, UL } from "../../../../../AbstractElements";
import { Href } from "../../../../../utils/Constant";
import { TableActionType, CancelledRequestConfigurationTableColumnsType } from "../../../../../Types/ApprovalRequest/Request";


export const CancelledRequestTableData = [
  {
    id: 1,
    name: "Girish",
    emailId: "girish@gmail.com",
    phoneNumber: 8875362510,
    status: "Active",
    action: "test ",
  },

  {
    id: 2,
    name: "Manish",
    emailId: "manish@gmail.com",
    phoneNumber: 9840521360,
    status: "Inactive",
    action: "test ",
  },


  {
    id:3,
    name: "Tony",
    emailId: "tony@gmail.com",
    phoneNumber: 7705309875,
    status: "Active",
    action: "test ",
  },

  {
    id:3,
    name: "Jairish",
    emailId: "jairish@gmail.com",
    phoneNumber: 6840975425,
    status: "Inactive",
    action: "test ",
  },


  {
    id:4,
    name: "Vasanth",
    emailId: "vasanth@gmail.com",
    phoneNumber: 9840578620,
    status: "Inactive",
    action: "test ",
  },

];

const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
    <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/cancelledrequestview`}>
        <i className="fa fa-eye"></i>
      </Link>
    </div>
    <div className="edit">
      <Link to={`${process.env.PUBLIC_URL}/approvalrequest/cancelledrequestedit`}>
        <i className="icon-pencil-alt" />
      </Link>
    </div>
    <div className="delete">
      <Link to={Href}>
        <i className="icon-trash" />
      </Link>
    </div>
  </UL>
  );
};

export const CancelledRequestConfigurationColumn = [
  {
    name: "Name",
    selector: (row: CancelledRequestConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: CancelledRequestConfigurationTableColumnsType) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: CancelledRequestConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: CancelledRequestConfigurationTableColumnsType) => `${row.status}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: CancelledRequestConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];