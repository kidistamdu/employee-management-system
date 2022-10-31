import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicGuard } from "src/app/core/guard/public.guard";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [ PublicGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [
    PublicGuard
  ] },]
@NgModule({


imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]


})

export class AuthRoutingModule{

}