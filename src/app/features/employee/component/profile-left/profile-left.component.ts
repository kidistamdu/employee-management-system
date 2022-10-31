import { Component, Input } from "@angular/core";
import { Employee } from "src/app/model/employee";

@Component({
    selector: 'app-profile-left',
    templateUrl: './profile-left.component.html',
  })
  export class ProfileLeftComponent {

    @Input()
    empDetail!: Employee

    // Output

    
  }