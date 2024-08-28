import { ProfilesMessageType } from "../../Types/Layout/Header";

export const profilesMessage: ProfilesMessageType[] = [
  {
    name: "My Profile",
    icon: "User",
    link: `${process.env.PUBLIC_URL}/users/userprofile`,
  },
  {
    name: "Inbox",
    icon: "Mail",
    link: `${process.env.PUBLIC_URL}/email/letterbox`,
  },
  {
    name: "Settings",
    icon: "Settings",
    link: `${process.env.PUBLIC_URL}/users/useredit`,
  },
];

export const notificationTab = [
  {
    title: "All(3)",
    id: "1",
  },
  {
    title: "Messages",
    id: "2",
  },
  {
    title: "Cart",
    id: "3",
  },
];

export const userNotification = [
  {
    image: "5.jpg",
    name: "Floyd Miles",
    detail: "Sir, Can i remove part in des...",
  },
  {
    image: "6.jpg",
    name: "Dianne Russell",
    detail: "So, what is my next work ?",
  },
];

export const messageData = [
  {
    image: "3.jpg",
    name: "Bala",
    detail: "Account Admin Requested the Quote",
    time: "4 hours ago",
  },
  {
    image: "7.jpg",
    name: "Shankar",
    detail: "Transport Head Edited the Request",
    time: "8 hours ago",
  },
  {
    image: "5.jpg",
    name: "Suresh",
    detail: "School Admin More info requested",
    time: "1 day ago",
  },
  {
    image: "6.jpg",
    name: "Shankar",
    detail: "Transport Head Created a Request!",
    time: "1 day ago",
  },
];

export const cartData = [
  {
    image: "cart-img.jpg",
    title: "Furniture Chair for Home",
    amount: "500",
  },
  {
    image: "receiver-img.jpg",
    title: "Men Cotton Blend Blue T-Shirt",
    amount: "695.00",
  },
];

export const bookMarkData = [
  {
    icon: "form",
    path: `/forms/formscontrols/formvalidation`,
    title: "Form",
    color: "primary",
  },
  {
    icon: "user",
    path: `/users/userprofile`,
    title: "Profile",
    color: "secondary",
  },
  {
    icon: "table",
    path: `/table/reactstraptable/basictable`,
    title: "Tables",
    color: "warning",
  },
];
