import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

@NgModule({

declarations: [

    LoginComponent,
    RegisterComponent],

imports: [
    AuthRoutingModule,
    AngularFireAuthModule,
    AppRoutingModule,
],
providers: []


})

export class AuthModule{

}