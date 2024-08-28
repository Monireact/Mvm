import { Link } from "react-router-dom";
import { Image, UL } from "../../../../../AbstractElements";
import { Href } from "../../../../../utils/Constant";
import { TableActionType, NewRequestConfigurationTableColumnsType , NewRequestTableProduct } from "../../../../../Types/ApprovalRequest/Request";
import { dynamicImage } from "../../../../../Service";
import { TableColumn } from "react-data-table-component";


export const NewRequestTableData = [
  {
    id: 1,
    school: "chetpet",
    departments: "Transport ",
    approximateBudget: "5,000",
    typeOfRequest: " Change Tire",
    date: "15/05/2024 ",
    priority: " Medium",
    requestedBy: "Venkat ",
    images: "other-images/tyre-img.jpg",
    tags: "Bus Spare Parts",
    status: "Open",
    action: "test ",
  },
  {
    id: 2,
    school: "Trichy",
    departments: "Transport ",
    approximateBudget: "45,000",
    typeOfRequest: " Tyre",
    date: "1/07/2024 ",
    priority: " Medium",
    images: "other-images/desktop-img.jpeg",
    tags: "Bus Spare Parts",
    status: "Open",
    action: "test ",
  },

  {
    id: 3,
    school: "Kumbakonam",
    departments: "IT",
    approximateBudget: "40,000",
    typeOfRequest: "Computer",
    date: "29/07/2024 ",
    priority: " Medium",
    images: "other-images/projector-img.jpeg",
    tags: "Computer",
    status: "Open",
    action: "test ",
  },

  {
    id: 4,
    school: "Polachery",
    departments: "Pet",
    approximateBudget: "4,00,0000 ",
    typeOfRequest: "Sports shoe",
    date: "30/07/2024 ",
    priority: " Medium",
    images: "other-images/bus-img.jpeg",
    tags: "Sports shoe",
    status: "Open",
    action: "test ",
  },
];


const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequest`}>
          <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/approvalrequest/editnewrequest`}>
          <i className="icon-pencil-alt" />
        </Link>
      </div>
      <div className="delete">
      <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequest1`}>
      <i className="icon-trash" />
        </Link>
      </div>
    </UL>
  );

};

const NewRequestTableImage :React.FC<NewRequestTableProduct> = ({ images }) => {
  return (
    <div className="light-product-box">
    <Image className="img-fluid align-self-center img-fluid img-50" src={dynamicImage(images)} alt="laptop" />
  </div>
  );
};

export const NewRequestConfigurationColumn:TableColumn<NewRequestConfigurationTableColumnsType>[] = [
  {
    name: "School",
    selector: (row) => `${row.school}`,
    sortable: true,
  },
  {
    name: "Departments",
    selector: (row) => `${row.departments}`,
    sortable: true,
  },
  {
    name: "Budget",
    selector: (row) => `${row.approximateBudget}`,
    sortable: true,
  },
  {
    name: "Type Of Requests",
    selector: (row) => `${row.typeOfRequest}`,
    sortable: true,
  },
  {
    name: "Due Date",
    selector: (row) => `${row.date}`,
    sortable: true,
  },
  {
    name: "Priority",
    selector: (row) => `${row.priority}`,
    sortable: true,
  },
  {
    name: "Image",
    cell: (row) => <NewRequestTableImage images={row.images}/>,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => `${row.status}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => <Tableaction id={row.action} />,
    sortable: true,
  },
];