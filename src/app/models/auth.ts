import { studentUser } from "./studentUser";
import { CompanyUser } from "./companyUser";

export class auth
{
    signin:boolean=false;
    type:{"student":boolean,"admin":boolean,"company":boolean,"anonymous"}=
{"student":false,"admin":false,"anonymous":true,"company":false}    
    studentData:studentUser=new studentUser();
    companyData:CompanyUser=new CompanyUser();
    
}