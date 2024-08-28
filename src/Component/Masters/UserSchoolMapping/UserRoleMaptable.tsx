// import { Link } from "react-router-dom";
// import { UL, Btn } from "../../../AbstractElements";
// import { TableActionType } from "../../../Types/ApprovalRequest/Request";
// import { RoleNameConfigurationTableColumnsType, UsersMapConfigurationTableColumnsType } from "../../../Types/Tables/Masters/Schools";
// import { Href } from "../../../utils/Constant";


// export const UsersTableData = [
//   {
//     id:1,
//       name:"1",
//       Roles:"Department Head",
//       School:"Chetpet Trichy",
//       Departments:"Chetpet-IT ,Science Trichy-IT",
//       action:"",
//   },

//   // {
//   //   id: 2,
//   //   name:"2",
//   //   roleCode: "Transport",
//   //    roleName:"rolename",
//   //   description: "Bus Spare Parts",
//   //   action: "test",
//   // },
//   // {
//   //   id: 2,
//   //   departments: "Accounts",
//   //   school: "Tenkasi",
//   //   action: "test",
//   // },

//   // {
//   //   id: 3,
//   //   departments: "Transport",
//   //   school: "Irungattukottai",
//   //   action: "test",
//   // },

//   // {
//   //   id: 4,
//   //   departments: "Hostel",
//   //   school: "Kumbakkonam",
//   //   action: "test",
//   // },

//   // {
//   //   id: 5,
//   //   departments: "Admin",
//   //   school: "Chetpat",
//   //   action: "test",
//   // },

//   // {
//   //   id: 6,
//   //   departments: "Sports",
//   //   school: "Polacherry",
//   //   action: "test",
//   // },
// ];

// const TableAction = ({ id }: TableActionType) => {
//   return (
//     <UL className="action simple-list flex-row" id={id}>
//       <div className="info">
//         <Link to={`${process.env.PUBLIC_URL}/masters/role/viewroles`}>
//           <i className="fa fa-eye"></i>
//         </Link>
//       </div>

//       <div className="edit">
//         <Link to={`${process.env.PUBLIC_URL}/masters/role/editroles`}>
//           <i className="icon-pencil-alt" />
//         </Link>
//       </div>

//       {/* <div className="edit">
//         <Link to={`${process.env.PUBLIC_URL}/masters/role/permmision`}>
//           <Btn className="btn btn-secondary btn-sm py-1 px-2 " href={Href}>
//             {"RolesPermission"}
//           </Btn>
//         </Link>
//       </div> */}

//       {/* <div className="delete">
//           <Link to={Href}>
//             <i className="icon-trash" />
//           </Link>
//         </div> */}
//     </UL>
//   );
// };

// export const UserRoleMapConfigurationColumn = [
//   {
//     name: "Roles",
//     selector: (row: UsersMapConfigurationTableColumnsType) => row["Roles"],
//     sortable: true,
//   },

//   {
//     name: "Schools",
//     selector: (row: UsersMapConfigurationTableColumnsType) => `${row.School}`,
//     sortable: true,
//   },



  
//   {
//     name: "Departments",
//     selector: (row: UsersMapConfigurationTableColumnsType) => `${row.Departments}`,
//     sortable: true,
//   },
 

  
//   {
//     name: "Action",
//     cell: (row: UsersMapConfigurationTableColumnsType) => (
//       <TableAction id={row.action} />
//     ),
//     sortable: true,
//   },
// ];
