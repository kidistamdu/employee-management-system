import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { SharedModule } from "src/app/shared/shared.module";
import { ContractComponent } from "./component/contract/contract.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { ProfileLeftComponent } from "./component/profile-left/profile-left.component";
// import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeesHomeComponent} from "./pages/employees-home/employees-home.component";
import { EmployeesDetailComponent } from "./pages/employees-detail/employees-detail.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ContractDetailComponent } from "./pages/contract-detail/contract-detail.component";
import { PrivateGuard } from "src/app/core/guard/private.guard";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule} from 'ngx-pagination';
import { EventsComponent } from "./pages/events/events.component";


const routes = [

    
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

declarations: [
    EmployeesHomeComponent,
    EmployeesDetailComponent,
    ProfileLeftComponent,
    NavBarComponent,
    ContractComponent,
    DashboardComponent,
    ContractDetailComponent,
    EventsComponent
    
   
    
    
],
imports: [
    // EmployeeRoutingModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    
   
],
providers: []


})

export class EmployeeModule{
    static routes = routes
}