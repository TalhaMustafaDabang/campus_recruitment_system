import { Data } from "../../../node_modules/@angular/router";
import { Time } from "../../../node_modules/@angular/common";

export class Vacancy
{
    jobTitle?: string;
    experience?: string;
    skillsRequired?: string;
    salary?: string;
    requiredGpa?: string;
    universityPassingoutYearRequired?: string;
    genderDiscrimination?: string;
    workingLocation?: string;
    requiredDegree?: string;
    extraDetails?: string;
    verified: boolean =false;
    date:Date = new Date();
    companyId?: string;
    companyName?: string;
    vacancyId?: string;
}