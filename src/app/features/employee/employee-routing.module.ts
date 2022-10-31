import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateGuard } from "src/app/core/guard/private.guard";
import { EmployeesDetailComponent } from "./pages/employees-detail/employees-detail.component";
import {EmployeesHomeComponent} from "./pages/employees-home/employees-home.component"
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ContractDetailComponent } from "./pages/contract-detail/contract-detail.component";
import { EventsComponent } from "./pages/events/events.component";



const routes: Routes = [

    
    { path: 'dashboard', component: DashboardComponent, canActivate: [
        PrivateGuard
      ] },
    { path: 'employeesHome', component: EmployeesHomeComponent, canActivate: [
        PrivateGuard
      ] },
      { path: 'employeesDetail/:id', component: EmployeesDetailComponent , canActivate: [
        PrivateGuard
      ]},
      { path: 'contractDetail/:id', component: ContractDetailComponent , canActivate: [
        PrivateGuard
      ]},
      { path: 'events', component: EventsComponent , canActivate: [
        PrivateGuard
      ]},
      
   ]
@NgModule({


imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]


})

export class EmployeeRoutingModule{

}