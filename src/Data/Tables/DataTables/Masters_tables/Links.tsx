import { Link } from "react-router-dom";
import { LI, UL,Image } from "../../../../AbstractElements";
import { TableActionType, SchoolConfigurationTableColumnsType, VendorsConfigurationTableColumnsType, LinksConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";
import { Href } from "../../../../utils/Constant";


export const LinksTableData = [
  {
  id: 1,
  schoolName: "Tenkasi",
  type: "School Fees",
  link:"http://bitly.com/ret_21",
  description:" To Collect School Fees",
  action: "test",
},	

];

  const TableAction = ({ id }: TableActionType) => {
    return (
      <UL className="action simple-list flex-row" id={id}>
 <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/masters/link/viewlinks`}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/link/Editlinks`}>
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
  
  export const LinksConfigurationColumn = [
    {
      name: "vendor",
      selector: (row: LinksConfigurationTableColumnsType) => row["schoolName"],
      sortable: true,
    },
    {
      name: "name",
      selector: (row: LinksConfigurationTableColumnsType) => `${row.type}`,
      sortable: true,
    },
    {
      name: "contactPerson",
      selector: (row: LinksConfigurationTableColumnsType) => `${row.link}`,
      sortable: true,
    },
    {
      name: "address",
      selector: (row: LinksConfigurationTableColumnsType) => `${row.description}`,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: LinksConfigurationTableColumnsType) => <TableAction id={row.action} />,
      sortable: true,
    },
  ];