import { Link } from "react-router-dom";
import { LI, UL, Image } from "../../../../AbstractElements";
import { TableActionType, DepartmentConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";
import { Href } from "../../../../utils/Constant";


export const DepartmentTableData = [
  {
    id: 1,
    departments: "IT",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },
  {
    id: 2,
    departments: "Accounts",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },

  {
    id: 3,
    departments: "Transport",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },

  {
    id: 4,
    departments: "Hostel",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },

  {
    id: 5,
    departments: "Admin",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },

  {
    id: 6,
    departments: "Sports",
    school: ["Chetpet","Irungattukottai","MIRS","Trichy","Polachery","Tenkasi","Kumbakonam","Avadi"],
    action: "test",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <div>
    <UL className="action simple-list flex-row" id={id}>
      {/* <div className="info">
        <Link to={`${process.env.PUBLIC_URL}/masters/department/viewdepartment`}>
          <i className="fa fa-eye"></i>
        </Link>
        </div> */}
        <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/department/editdepartment`}>
          <i className="icon-pencil-alt" />
        </Link>
        </div>
        
        {/* <div className="delete">
          <Link to={Href}>
            <i className="icon-trash" />
          </Link>
        </div> */}
       
    </UL>
    </div>
  );
};

export const DepartmentConfigurationColumn = [
  {
    name: "Department",
    selector: (row: DepartmentConfigurationTableColumnsType) => row["departments"],
    sortable: true,
  },
  {
    name: "School",
    selector: (row: DepartmentConfigurationTableColumnsType) => `${row.school}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: DepartmentConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];