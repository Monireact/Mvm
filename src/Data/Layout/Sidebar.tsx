import { MenuItem } from "../../Types/Layout/Sidebar";
import { Href } from "../../utils/Constant";



export const MenuList: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboard",
        id: 1,
        icon: "home",
        lanClass: "lan-2",
        path: `${process.env.PUBLIC_URL}/dashboard/default`,
        active: false,
      },

      {
        title: "Masters",
        id: 2,
        icon: "widget",
        type: "sub",
        active: false,
        children: [
          // { path: `${process.env.PUBLIC_URL}demo/masters/schoolslist`, title: "Schools", type: "link" },
          
          // { path: `${Href}`, title: "-----DEMO----", type: "link" },

          { path: `${process.env.PUBLIC_URL}/masters/schools`, title: "Schools", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/departments`, title: "Departments", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/vendors`, title: "Vendors", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/configurations`, title: "Budget Configuration", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/masters/links`, title: "Links", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/tags`, title: "Tags", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/categories`, title: "categories", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/roles`, title: "Roles", type: "link" },
          {path: `${process.env.PUBLIC_URL}/user/users`, title: "Users",type: "link",},
          { path: `${process.env.PUBLIC_URL}/masters/roles/maproles`, title: "Map Roles", type: "link" },
        ]
      },

      {
        title: "Requests",
        id: 3,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/newrequest`, title: "New Request", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/pendingrequest`, title: "Request Lists", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/completedrequest`, title: "Completed Requests", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/inprogressrequest`, title: "Hold Requests", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/cancelledrequest`, title: "Cancelled Requests", type: "link" },
          // demo links 
          // { path: `${Href}`, title: "--------DEMO--------", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/createnewrequest`, title: "New Request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/openrequest`, title: "Open Requests", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/schooladminapproved`, title: "School Admin Approval", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/quotedrequest`, title: "Upload Quote", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/quotesubmitted`, title: "Quote Submitted", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/committeememberapproved`, title: "Committe Member Approved", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/inprogressrequest`, title: "Waiting For PO", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/waitingforpo`, title: "Inprogress Request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/completedrequest`, title: "Completed Requests", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/cancelledrequest`, title: "Cancelled Requests", type: "link" },
        ]
      },
      
      {
        id: 5,
        path: `${process.env.PUBLIC_URL}/profile/profile`,
        icon: "support-tickets",
        type: "sub",
        active: false,
        title: "Profile"
      },
      {
        id: 5,
        path: `${process.env.PUBLIC_URL}/Changepassword`,
        icon: "support-tickets",
        type: "sub",
        active: false,
        title: "Change Password"
      },
      {
        id: 6,
        path: `${process.env.PUBLIC_URL}/login`,
        icon: "support-tickets",
        type: "sub",
        active: false,
        title: "Logout"
      },
    ],
  }
];