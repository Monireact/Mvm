import { Link } from "react-router-dom";
import { P, UL,Image } from "../../../../AbstractElements";
import { TableActionType, SchoolConfigurationTableColumnsType, SchoolListTableProduct } from "../../../../Types/Tables/Masters/Schools";
import { TableColumn } from "react-data-table-component";
import { dynamicImage } from "../../../../Service";
import { useEffect, useState } from "react";


export const schoolTableData = [

  {
    id: 1,
    SchoolLocation: "chetpet",
    schoolCode:"CHE",
    SchoolName:"Maharishi Vidya Mandir Senior Secondary School",
    emailId: "chetpet@gmail.com",
    mobileNumber: 952976585,
    address: " Old No. 4, New No. 13, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 2,
    SchoolLocation: "Irungattukottai",
    schoolCode:"IRU",
    SchoolName:"Maharishi Vidya Mandir Senior Secondary School",
    emailId: "Irungattukottai@gmail.com",
    mobileNumber: 9952976585,
    address: " Old No. 5, New No. 15, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 3,
    SchoolLocation: "MIRS",
    schoolCode:"MIR",
    SchoolName:"Maharishi International Residential School",
    emailId: "mirs@gmail.com	",
    mobileNumber: 9952976585,
    address: " Old No. 8, New No. 20, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 4,
    SchoolLocation: "Trichy",
    schoolCode:"TRI",
    SchoolName:"Maharishi Vidya Mandir Senior Secondary School",
    emailId: "trichy@gmail.com	",
    mobileNumber: 9952976585,
    address: " Old No. 1, New No. 11, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 5,
    SchoolLocation: "Polachery",
    schoolCode:"PLCY",
    SchoolName:"Maharishi Vidya Mandir Senior Secondary School",
    emailId: "polachery@gmail.com",
    mobileNumber: 9952976585,
    address: " Old No. 2, New No. 4, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 6,
    SchoolLocation: "Tenkasi",
    schoolCode:"TEN",
    SchoolName:"",
    emailId: "tenkasi@gmail.com",
    mobileNumber: 9952976585,
    address: " Old No. 10, New No. 15, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 7,
    SchoolLocation: "Kumbakkonam",
    schoolCode:"KUM",
    SchoolName:"",
    emailId: "Kumbakkonam@gmail.com",
    mobileNumber: 9952976585,
    address: " Old No. 44, New No. 23, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
  {
    id: 8,
    SchoolLocation: "Avadi",
    schoolCode:"AVD",
    SchoolName:"",
    emailId: "Avadi@gmail.com",
    mobileNumber: 9952976585,
    address: " Old No. 27, New No. 20, R, T. Mudali St, Baker Street, Choolai, Chennai, Tamil Nadu 600112",
    image: "other-images/mvm-favicon.png",
    action: "test",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <div className="view">
        <Link to={`${process.env.PUBLIC_URL}/masters/school/viewschool`}>
        <i className="fa fa-eye"></i>
        </Link>
      </div>
      <div className="edit">
        <Link to={`${process.env.PUBLIC_URL}/masters/school/editschool`}>
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

const SchoolListTableProductName: React.FC<SchoolListTableProduct> = ({ images }) => {
  return (
    <div className="product-names my-2">
      <div className="light-product-box">
        <Image className="img-fluid" src={dynamicImage(images)} alt="laptop" />
      </div>
    </div>
  );
};

export const schoolConfigurationColumn:TableColumn<SchoolConfigurationTableColumnsType>[] = [
  {
    name: "Logo ",
    cell: (row) =><SchoolListTableProductName images={row.image} />
  },
  {
    name: "School Name",
    selector: (row) => `${row.SchoolName}`,
    sortable: true,
  },  
  {
    name: "School Code",
    selector: (row) => `${row.schoolCode}`,
    sortable: true,
  },
  
  {
    name: "School Location",
    selector: (row) => `${row.SchoolLocation}`,
    sortable: true,
  },
 
  {
    name: "Email id",
    selector: (row) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Mobile Number",
    selector: (row) => `${row.mobileNumber}`,
    sortable: true,
  },
  // {
  //   name: "Address",
  //   selector: (row) => `${row.address}`,
  //   sortable: true,
  // },
  {
    name: "Action",
    cell: (row) => <TableAction id={row.action} />,
    sortable: true,
  },
];