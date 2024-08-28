import { Link } from "react-router-dom";
import { UL } from "../../../../../AbstractElements";
import { TableActionType } from "../../../../../Types/ApprovalRequest/Request";
import { CategoryNameConfigurationTableColumnsType } from "../../../../../Types/Tables/Masters/Schools";


export const CategoriesTableData = [
  {
    id: 1,
    categoryName: "Construction",
    description: "Civil Construction Project",
    action: "test",
  },

  {
    id: 2,
    categoryName: "Transport",
    description: "Bus Spare Parts",
    action: "test",
  },
  {
    id: 3,
    categoryName: "Accounts",
    description: "Tenkasi",
    action: "test",
  },
  {
    id: 4,
    categoryName: "Transport",
    description: "Irungattukottai",
    action: "test",
  },
  {
    id: 5,
    categoryName: "Hostel",
    description: "Kumbakkonam",
    action: "test",
  },
  {
    id: 6,
    categoryName: "Admin",
    description: "Chetpat",
    action: "test",
  },
  {
    id: 7,
    categoryName: "Sports",
    description: "Polacherry",
    action: "test",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="info">
        <Link to={`${process.env.PUBLIC_URL}/masters/categories/viewcategories`}>
          <i className="fa fa-eye"></i>
        </Link>
        </div>
        <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/categories/editcategories`}>
          <i className="icon-pencil-alt" />
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

export const CategoriesConfigurationColumn = [
  {
    name:"Category Name",
    selector: (row: CategoryNameConfigurationTableColumnsType) => row["categoryName"],
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: CategoryNameConfigurationTableColumnsType) => `${row.description}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: CategoryNameConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];