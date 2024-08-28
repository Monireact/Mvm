import { Link } from "react-router-dom";
import { UL } from "../../../../AbstractElements";
import { TableActionType, VendorsConfigurationTableColumnsType } from "../../../../Types/Tables/Masters/Schools";
import { Href } from "../../../../utils/Constant";


export const VendorTableData = [
  {
    id: 1,
    vendorName: "JK Tyre",
    contactPerson: "Suresh",
    phoneNumber: 789456123,
    emailid: "suresh@gmail.com",
    city:"Chennai",
    action: "test",
  },
  {
    id: 2,
    vendorName: "DELL",
    contactPerson: "Hari",
    phoneNumber: 9876543214,
    emailid: "hari@gmail.com",
    city:"Chennai",
    action: "test",
  },
  {
    id: 3,
    vendorName: "HP",
    contactPerson: "Saran",
    phoneNumber: 789456123,
    emailid: "saran@gmail.com",
    city:"Chennai",
    action: "test",
  },
  {
    id: 4,
    vendorName: "MRF",
    contactPerson: "Ezhil",
    phoneNumber: 789456123,
    emailid: "ezhil@gmail.com",
    city:"Chennai",
    action: "test",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/masters/vendor/viewVendors`}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/vendor/editVendors`}>
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

export const VendorsConfigurationColumn = [
  {
    name: "Vendor Name",
    selector: (row: VendorsConfigurationTableColumnsType) => row["vendorName"],
    sortable: true,
  },
  {
    name: "Contact Person",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.contactPerson}`,
    sortable: true,
  },
  {
    name: "Phone No.",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.emailid}`,
    sortable: true,
  },
  {
    name: "City",
    selector: (row: VendorsConfigurationTableColumnsType) => `${row.city}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: VendorsConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];