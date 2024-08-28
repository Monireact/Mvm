import { FormikErrors } from "formik";

export interface AddschoolFormValidationProp {
    schoolcode:string;
    schoolname:string;
    schoollocation:string;
    emailid:string;
    mobilenumber:string;
    address:string;
    logo:string;
  }
  export interface AddschoolFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddschoolFormValidationProp>;
  }
