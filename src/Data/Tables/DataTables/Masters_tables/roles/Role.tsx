import { Link } from "react-router-dom";
import { UL, Btn } from "../../../../../AbstractElements";
import { TableActionType } from "../../../../../Types/ApprovalRequest/Request";
import { RoleNameConfigurationTableColumnsType } from "../../../../../Types/Tables/Masters/Schools";

export const RolesTableData = [
  {
    id: 1,
    roleCode: "MVM-DH",
    roleName: "Department Head",
    description: "Representive of the department to raise request ",
    action: "test",
  },
  {
    id: 2,
    roleCode: "MVM-SA",
    roleName:"School Admin",
    description: "Representive of the school head ",
    action: "test",
  },
  {
    id: 3,
    roleCode: "MVM-AO",
    roleName:"AO",
    description: "Person to add quotations",
    action: "test",
  },
  {
    id: 4,
    roleCode: "MVM-CH",
    roleName:"Category Head",
    description: "Structural engineer head of construction",
    action: "test",
  },
  {
    id: 5,
    roleCode: "MVM-CM",
    roleName:"Committee Member",
    description: "Deciding authority of all request",
    action: "test",
  },
  {
    id: 6,
    roleCode: "MVM-PO",
    roleName:"Purchase Team",
    description: "Team to release PO",
    action: "test",
  }
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="info">
        <Link to={`${process.env.PUBLIC_URL}/masters/role/viewroles`}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>

      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/role/editroles`}>
          <i className="icon-pencil-alt" />
        </Link>
      </div>

      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/role/permmision`}>
          <Btn className="btn btn-secondary btn-sm py-1 px-2 ">
            {"Permission"}
          </Btn>
        </Link>
      </div>

      {/* <div className="delete">
          <Link to={Href}>
            <i className="icon-trash" />
          </Link>
        </div> */}
    </UL>
  );
};

export const RolesConfigurationColumn = [
  {
    name: "Role Code",
    selector: (row: RoleNameConfigurationTableColumnsType) => row["roleCode"],
    sortable: true,
  },
  {
    name: "Role Name",
    selector: (row: RoleNameConfigurationTableColumnsType) => `${row.roleName}`,
    sortable: true,
  },

  {
    name: "Description",
    selector: (row: RoleNameConfigurationTableColumnsType) =>
      `${row.description}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: RoleNameConfigurationTableColumnsType) => (
      <TableAction id={row.action} />
    ),
    sortable: true,
  },
];
