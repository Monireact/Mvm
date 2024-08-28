import { FormikErrors } from "formik";

// vendor
export interface AddVendorFormValidationProp {
    schoolname:string;
    vendorname:string;
    VendorID:string;
    address:string;
    state:string;
    city:string;
    // registration:string;
    pincode:string;
    emailid:string;
    phonenumber:string;
    gstnumber:string;
    pannumber:string;
    services:string;
    tags:string;
    status:string;
    contactperson1:string;
    phonenumber1:string;
    emailid1:string;
    contactperson2:string;
    phonenumber2:string;
    emailid2:string;
    address_details:string;
    city_details:string;
    state_details:string;
    pincode_details:string;
    bankname:string;
    accountnumber:string;
    branch:string;
    ifsc:string;



    
  }
  export interface AddVendorFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddVendorFormValidationProp>;
  }
  