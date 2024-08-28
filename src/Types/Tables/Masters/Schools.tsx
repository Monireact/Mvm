export interface TableActionType {
    id: string;
  }
  
  export interface SchoolConfigurationTableColumnsType {
    id: number;
    schoolCode:string;
    SchoolName: string;
    SchoolLocation:string;
    emailId: string;
    mobileNumber: number;
    address: string;
    image: string;
    action: string;
  }
  export interface SchoolListTableProduct {
    images?: string;
    // schoolCode?: string;
  }

  export interface DepartmentConfigurationTableColumnsType {
    id: number;
    departments: string;
    school: any;
    action: string;
  }

  export interface VendorsConfigurationTableColumnsType{
  
      id: number;
      vendorName: string;
      contactPerson:string;
      phoneNumber:number;
      emailid:string;
      city:string;
      action: string;
    }

    export interface LinksConfigurationTableColumnsType{
      id: number;
      schoolName: string;
      type:string;
      link:string;
      description:string;
      action: string;
    }

    export interface TagsConfigurationTableColumnTypes{
      id:number;
      tagName:string;
      description:string;
      action:string;
      }

    export interface ConfigurationsColumnTypes{
      id:number;
      schoolName:string;
      budget:string;
      action:string;
    }

    export interface NewRequestsConfigurationTableColumnsType{
      id: number;
      schoolName: string;
      departments:string;
      typeOfRequest:string;
      description:string;
      priority:string;
      requestedBy:string;
      date:string;
      images:string;
      status:string;
      action: string;
    }

    export interface CategoryNameConfigurationTableColumnsType{
      id:number;
      categoryName:string;
      description:string;
      action: string;
    }

    export interface RoleNameConfigurationTableColumnsType{
      id:number;
      roleCode:string;
      roleName:string
      description:string;
      action: string;
    }

    export interface UsersMapConfigurationTableColumnsType{
      id:number;
      name:string;
      Roles:string;
      School:string;
      Departments:string;
      action:string;
    }
    export interface MapRoleConfigurationTableColumnsType{
      id:number;
      userName:string;
      phoneNumber:string;
      emailId:string;
      roles:string;
      action:string;
    }