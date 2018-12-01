// MODULES IMPORT
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { ani  } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// COMPONENTS IMPORT
import { AppComponent } from './app.component';
import { SigninPanelComponent } from './signin-panel/signin-panel.component';
import { RegistrationPanelComponent } from './registration-panel/registration-panel.component';
import { StudentProfileCreatorComponent } from './student-profile-creator/student-profile-creator.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentListDisplayerComponent } from './student-list-displayer/student-list-displayer.component';
import { IndividualStudentProfileDisplayerComponent } from './individual-student-profile-displayer/individual-student-profile-displayer.component';
import { VacancyDisplayerComponent } from './vacancy-displayer/vacancy-displayer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as firebase from 'firebase';

// SERVICES IMPORT
import { ModelsService } from './services/models.service';
import { AuthenticationService } from './services/authentication.service';


// ENVIRONMENT IMPORT
import { environment } from '../environments/environment';
import { router } from '../routes';
import { StudentRegistrationComponent } from './registration-panel/student-registration/student-registration.component';
import { CompanyRegistrationComponent } from './registration-panel/company-registration/company-registration.component';
import { StudentBasicInfoComponent } from './registration-panel/student-registration/student-basic-info/student-basic-info.component';
import { StudentPreviousAcademicInfoComponent } from './registration-panel/student-registration/student-previous-academic-info/student-previous-academic-info.component';
// import { StudentUniversityAcademicInfoComponent } from './registration-panel/student-registration/student-university-academic-info/student-university-academic-info.component';
import { FileUploadService } from './services/file-upload.service';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { DbService } from './services/db.service';
import { MatriculationInfoComponent } from './registration-panel/student-registration/student-previous-academic-info/matriculation-info/matriculation-info.component';
import { IntermediateInfoComponent } from './registration-panel/student-registration/student-previous-academic-info/intermediate-info/intermediate-info.component';
import { StudentUniversityInfoComponent } from './registration-panel/student-registration/student-university-info/student-university-info.component';
import { SkillsComponent } from './registration-panel/student-registration/skills/skills.component';
import { VacanyAdderComponent } from './vacany-adder/vacany-adder.component';
import { VacancyModelComponent } from './vacancy-displayer/vacancy-model/vacancy-model.component';
import { StudentModelComponent } from './students-list/student-model/student-model.component';
import { StudentProfileComponent } from './student-list-displayer/student-profile/student-profile.component';
import { UserProfileComponent } from './signin-panel/user-profile/user-profile.component';
import { CompanyUserProfileComponent } from './company-user-profile/company-user-profile.component';
import { StudentUserProfileComponent } from './student-user-profile/student-user-profile.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { ApplicationsForVacanciesComponent } from './applications-for-vacancies/applications-for-vacancies.component';

firebase.initializeApp(environment.firsebase);

@NgModule({
  declarations: [
    AppComponent,
    SigninPanelComponent,
    RegistrationPanelComponent,
    StudentProfileCreatorComponent,
    AdminPanelComponent,
    StudentListDisplayerComponent,
    IndividualStudentProfileDisplayerComponent,
    VacancyDisplayerComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StudentRegistrationComponent,
    CompanyRegistrationComponent,
    StudentBasicInfoComponent,
    StudentPreviousAcademicInfoComponent,
    // StudentUniversityAcademicInfoComponent,
    MatriculationInfoComponent,
    IntermediateInfoComponent,
    StudentUniversityInfoComponent,
    SkillsComponent,
    VacanyAdderComponent,
    VacancyModelComponent,
    StudentModelComponent,
    StudentProfileComponent,
    UserProfileComponent,
    CompanyUserProfileComponent,
    StudentUserProfileComponent,
    ApplicationsForVacanciesComponent
  ],
  imports: [
    BrowserModule,
    
    AngularFireModule.initializeApp(environment.firsebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(router),
    ModalModule.forRoot(),
    FormsModule,
    AngularFireDatabaseModule,
    HttpModule,
    AngularFirestoreModule,
   HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [ModalModule,StudentListDisplayerComponent],
  providers: [,AuthenticationGuardService,ModelsService,AuthenticationService,FileUploadService,DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
