import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {FirebaseService} from './service/auth/firebase.service';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { EmployeeModule } from './features/employee/employee.module';
import { AuthModule } from './features/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { BlankComponent } from './layout/blank/blank.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { NgxPaginationModule} from 'ngx-pagination';





const config = {
  apiKey: "AIzaSyAD2Q7V21Q2LZcEd5eSrXroWr1nyR7lDz4",
  authDomain: "fir-angular-auth-aba15.firebaseapp.com",
  projectId: "fir-angular-auth-aba15",
  storageBucket: "fir-angular-auth-aba15.appspot.com",
  messagingSenderId: "647161933177",
  appId: "1:647161933177:web:409cfca58ab3c8722dd3a8"

}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlankComponent,
    SidebarMenuComponent,
    
    

    
   

   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true}),
    AngularFireAuthModule,
    EmployeeModule,
    AuthModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
