import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeRoutingModule } from './features/employee/employee-routing.module';
import { AuthRoutingModule } from './features/auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './layout/main/main.component';
import { PrivateGuard } from './core/guard/private.guard';
import { BlankComponent } from './layout/blank/blank.component';
import { PublicGuard } from './core/guard/public.guard';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/employee/employee.module').then(x => x.EmployeeModule)
      },
    ],
    canActivate:[PrivateGuard]
    
  },
  {
    path:'',
    component: BlankComponent,
    children:[
      { path: ' ', redirectTo: 'login', pathMatch: 'full' },
    ],
    canActivate:[PublicGuard]
  }
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // EmployeeRoutingModule,
    AuthRoutingModule,
    SharedModule
  
  ],
    
    
  exports: [RouterModule],
})
export class AppRoutingModule {}
