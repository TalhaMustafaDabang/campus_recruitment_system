import { Routes } from '@angular/router';
import { SigninPanelComponent } from './app/signin-panel/signin-panel.component';
import { RegistrationPanelComponent } from './app/registration-panel/registration-panel.component';
import { StudentProfileCreatorComponent } from './app/student-profile-creator/student-profile-creator.component';
import { AdminPanelComponent } from './app/admin-panel/admin-panel.component';
import { StudentListDisplayerComponent } from './app/student-list-displayer/student-list-displayer.component';
import { IndividualStudentProfileDisplayerComponent } from './app/individual-student-profile-displayer/individual-student-profile-displayer.component';
import { VacancyDisplayerComponent } from './app/vacancy-displayer/vacancy-displayer.component';
import { HomeComponent } from './app/home/home.component';
import { StudentBasicInfoComponent } from './app/registration-panel/student-registration/student-basic-info/student-basic-info.component';
import { CompanyRegistrationComponent } from './app/registration-panel/company-registration/company-registration.component';
import { StudentPreviousAcademicInfoComponent } from './app/registration-panel/student-registration/student-previous-academic-info/student-previous-academic-info.component';
import { MatriculationInfoComponent } from './app/registration-panel/student-registration/student-previous-academic-info/matriculation-info/matriculation-info.component';
import { IntermediateInfoComponent } from './app/registration-panel/student-registration/student-previous-academic-info/intermediate-info/intermediate-info.component';
import { StudentUniversityInfoComponent } from './app/registration-panel/student-registration/student-university-info/student-university-info.component';
import { SkillsComponent } from './app/registration-panel/student-registration/skills/skills.component';
import { VacanyAdderComponent } from './app/vacany-adder/vacany-adder.component';
import { StudentProfileComponent } from './app/student-list-displayer/student-profile/student-profile.component';
import { CompanyUserProfileComponent } from './app/company-user-profile/company-user-profile.component';
import { StudentUserProfileComponent } from './app/student-user-profile/student-user-profile.component';
import { AuthenticationGuardService } from './app/services/authentication-guard.service';
import { ApplicationsForVacanciesComponent } from './app/applications-for-vacancies/applications-for-vacancies.component';



export const router : Routes = [
   
    {
        path: 'student-profile' ,
        component: StudentProfileComponent,
        // canActivate: [AuthenticationGuardService]
        // data: {depth: 2}
    },
    {
        path: 'student-basic-profile-editor' ,
        component: StudentBasicInfoComponent,
        // data:{depth:2}
    },
    {
        path: 'student-skills',
        component: SkillsComponent,
        
    },
    {
        path: 'student-university-info' ,
        component: StudentUniversityInfoComponent,
        
    },
    {
        path: 'student-matriculation-info' ,
        component: MatriculationInfoComponent,
        
    },
    {
        path: 'vacancy-adder' ,
        component: VacanyAdderComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: 'student-intermediate-info' ,
        component: IntermediateInfoComponent,
        // data: {depth:2}
    },
    {
        path: 'company-profile-editor' ,
        component: CompanyRegistrationComponent
        ,data: {depth:2}
    },
    
{
    path: 'students-list' ,
    component: StudentListDisplayerComponent,
    canActivate: [AuthenticationGuardService]
},

{
    path: 'vacancies',
    component: VacancyDisplayerComponent,
    canActivate: [AuthenticationGuardService],
   
},
{
    path: 'signin',
    component: SigninPanelComponent,
    data: {depth: 1}
},
{
    path: 'student-user-profile' ,
    component: StudentUserProfileComponent,
    canActivate: [AuthenticationGuardService],
    // data: {depth: 2}
},
{
    path: 'company-user-profile' ,
    component: CompanyUserProfileComponent,
    canActivate: [AuthenticationGuardService],
    // data: {depth: 2}
},
{
    path: 'registration-panel',
    component: RegistrationPanelComponent,
    data: {depth: 1}
},
{
    path: 'profile',
    component: StudentProfileCreatorComponent,
    // canActivate: [AuthenticationGuardService]
},
{
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthenticationGuardService]
},
{
    path: 'create-profile',
    component: StudentProfileCreatorComponent,
},
{
    path: 'vacancy-apps',
    component: ApplicationsForVacanciesComponent,
},
{
    path: 'home',
    component: HomeComponent,   
    data: {depth: 1}
},
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
}


];