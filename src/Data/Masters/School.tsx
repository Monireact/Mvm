import * as Yup from "yup";
import { AddschoolFormValidationProp } from "../../Types/Masters/School/schools";
import { AddConfigurationFormValidationProp, AddDepartmentFormValidationProp, AddTagFormValidationProp } from "../../Types/Masters/Department/Departments";
import { AddVendorFormValidationProp } from "../../Types/Masters/Vendors";



// school
export const ADDSCHOOL_INITIALVALUE: AddschoolFormValidationProp = { schoolcode: "", schoollocation: "", emailid: "", mobilenumber: "", address: "", logo: "", schoolname: "" };
export const ADDSCHOOL_VALIDATIONSCHEMA = Yup.object().shape({
  schoolcode: Yup.string().min(7).required(" Enter the school code"),
  schoollocation: Yup.string().required(" Enter the school location"),
  emailid: Yup.string().required(" Enter the email id"),
  mobilenumber: Yup.string().min(1).max(10).required(" Enter the mobile number"),
  address: Yup.string().required(" Enter the address"),
  logo: Yup.string().required(" Select logo"),
  schoolname: Yup.string().required("Enter the school name")
});

// dept
export const ADDDEPARTMENT_INITIALVALUE: AddDepartmentFormValidationProp = { discription: "", departmentname: "", schoollist: [] };
export const ADDDEPARTMENT_VALIDATIONSCHEMA = Yup.object().shape({
  departmentname: Yup.string().required(" Enter the department name"),
  schoollist: Yup.array().min(1).required(" Select school location"),
  discription: Yup.string().required("Enter the discription")
});

// VENDOR
export const ADDVENDOR_INITIALVALUE: AddVendorFormValidationProp = {
  schoolname:"",vendorname: "", VendorID: "", address: "", state: "", city: "", pincode: "", emailid: "", phonenumber: "", gstnumber: "", pannumber: "", services: "", tags: "",
  status: "", contactperson1: "", phonenumber1: "", emailid1: "", contactperson2: "", phonenumber2: "", emailid2: "", address_details: "", city_details: "", state_details: "",
  pincode_details: "", bankname: "", accountnumber: "", branch: "", ifsc: "",
};
export const ADDVENDOR_VALIDATIONSCHEMA = Yup.object().shape({
  schoolname:Yup.string().required("Enter the vendor name"),
  vendorname: Yup.string().required("Enter the vendor name"),
  contactperson: Yup.string().required("Enter the contact person"),
  address: Yup.string().required("Enter the address"),
  state: Yup.string().required(" Select the state"),
  city: Yup.string().required(" Select the city"),
  pincode: Yup.string().required(" Enter the pincode"),
  emailid: Yup.string().required(" Enter the email id"),
  phonenumber: Yup.string().max(10).required(" Enter the phone number"),
  gstnumber: Yup.string().max(15).required(" Enter the gst number"),
  pannumber: Yup.string().max(10).required(" Enter the pan number"),
  services: Yup.string().required(" Enter the services"),
  tags: Yup.string().required(" Enter the tags"),
  status: Yup.string().required(" Enter the status"),
  contactperson1: Yup.string().required(" Enter the contactperson 1"),
  phonenumber1: Yup.string().required(" Enter the phonenumber 1"),
  emailid1: Yup.string().required(" Enter the emailid 1"),
  contactperson2: Yup.string().required(" Enter the contactperson 2"),
  phonenumber2: Yup.string().required(" Enter the phonenumber 2"),
  emailid2: Yup.string().required(" Enter the emailid 2"),
  address_details: Yup.string().required(" Enter the address"),
  city_details: Yup.string().required(" Enter the city"),
  state_details: Yup.string().required(" Enter the state"),
  pincode_details: Yup.string().required(" Enter the pincode"),
  bankname: Yup.string().required(" Enter the bank name"),
  accountnumber: Yup.string().required(" Enter the account number"),
  branch: Yup.string().required(" Enter the branch"),
  ifsc: Yup.string().required(" Enter the ifsc"),
});

// configuration
export const ADDCONFIGURATION_INITIALVALUE: AddConfigurationFormValidationProp = { schoolname: "", budget: "", };
export const ADDCONFIGURATION_VALIDATIONSCHEMA = Yup.object().shape({
  schoolname: Yup.string().required(" Enter the school location"),
  budget: Yup.string().required(" Enter the budget"),
});

// tags
export const ADDTAG_INITIALVALUE: AddTagFormValidationProp = { tagname: "",discrition:"", };
export const ADDTAG_VALIDATIONSCHEMA = Yup.object().shape({
tagname: Yup.string().required("Enter the tag name"),
discrition: Yup.string().required("Enter the discription")                     
});

// // categories
// export const ADDCATEGORY_INITIALVALUE: AddCategoryFormValidationProp = { tagname: "", description: "", };
// export const ADDCATEGORY_VALIDATIONSCHEMA = Yup.object().shape({
//   tagname: Yup.string().required(" select school location"),
//   description: Yup.string().required(" Enter the budget"),
// });

