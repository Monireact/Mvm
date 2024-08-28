export interface TableActionType {
    id: string;
  }
  
  export interface NewRequestConfigurationTableColumnsType {
    id: number;
    school:string;
    departments:string;
    approximateBudget:string;
    typeOfRequest:string;
    date: string;
    priority:string;
    images:string; 
    status:string;
    action: string;
  }
  export interface NewRequestTableProduct {
    images?: string;
  }

  export interface PendingRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }

  export interface OldRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }
  export interface CancelledRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }
