import { FormikErrors } from "formik";

// department
export interface AddDepartmentFormValidationProp {
    departmentname:string;
    discription:string
    schoollist: [];
  }
  export interface AddDepartmentFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddDepartmentFormValidationProp>;
  }

// configuration
  export interface AddConfigurationFormValidationProp {
    schoolname:string;
    budget:string;
  }
  export interface AddConfigurationFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddConfigurationFormValidationProp>;
  }

  // categories
  export interface AddCategoryFormValidationProp {
    schoolname:string;
    budget:string;
  }
  export interface AddCategoryFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddCategoryFormValidationsProp>;
  }
  
  // tags
  export interface AddTagFormValidationProp {
    tagname:string;
    discrition:string;
  }
  export interface AddTagFormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<AddTagFormValidationProp>;
  }