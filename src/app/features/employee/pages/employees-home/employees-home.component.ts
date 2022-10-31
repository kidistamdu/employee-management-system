import { Component, OnInit,} from '@angular/core';
import { FormGroup,FormBuilder,FormControl,FormsModule} from '@angular/forms'
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/features/employee/service/employee.service';
import { FirebaseService } from 'src/app/service/auth/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.css']

 
})
export class EmployeesHomeComponent implements OnInit {
   
  searchText : any;
  isSignedIn = false;
  
  
 

  empDetail !: FormGroup;
  empObj : Employee= new Employee();
  empList : Employee[] = [];

  file!: File
  constructor(private formBuilder : FormBuilder, private router: Router, private empService : EmployeeService, public auth : FirebaseService)  { }
  
  totalLength :any;
  page:number =1;

  ngOnInit(): void {
    
    this.getAllEmployee();

  this.empDetail = this.formBuilder.group({
    id:[''],
    name:[''],
    salary:[''],
    email:[''],
    image:[''],
    mobile:[''],
    address:[''],
    position:[''],
    gender:['']

  });
  this.totalLength = this.empList.length
}
onChange(event: any) {
  this.file = event.target.files[0] as File;
 this.getBase64(this.file)
}
 getBase64  (file: File) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload =  () => {
    console.log(reader.result);
    this.empObj.image = reader.result as string
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}


addEmployee(){

  this.empObj.id = this.empDetail.value.id;
  this.empObj.name = this.empDetail.value.name;
  this.empObj.salary = this.empDetail.value.salary;
  this.empObj.email = this.empDetail.value.email;
  this.empObj.mobile = this.empDetail.value.mobile;
  this.empObj.address = this.empDetail.value.address;
  this.empObj.position = this.empDetail.value.position;
  this.empObj.gender = this.empDetail.value.gender;



  this.empService.addEmployee(this.empObj).subscribe({
    next:(res)=> {
      this.getAllEmployee();
      this.empDetail.reset();
    
    },
  })


}



getAllEmployee(){
  this.empService.getAllEmployee().subscribe(
    {
    next:(res)=> {
      this.empList = res;
      console.log(this.empList)
    },
  })
}

editEmployee(emp : Employee){

    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['salary'].setValue(emp.salary);
    this.empDetail.controls['address'].setValue(emp.address);
    this.empDetail.controls['mobile'].setValue(emp.mobile);
    this.empDetail.controls['position'].setValue(emp.position);
    this.empDetail.controls['gender'].setValue(emp.gender);
    

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.mobile = this.empDetail.value.mobile;
    this.empObj.address = this.empDetail.value.address;
    this.empObj.mobile = this.empDetail.value.mobile;
    this.empObj.position = this.empDetail.value.position;
    this.empObj.gender = this.empDetail.value.gender;
   

}

updateEmployee(){

  this.empService.updateEmployee(this.empObj).subscribe(
    {
      next:(res)=>{
        this.getAllEmployee();
      }
    })
}

deleteEmployee(emp : Employee){

  this.empService.deleteEmployee(emp).subscribe(
    { 
      next:(res) => {
        alert('Employee deleted successfully')
        this.getAllEmployee();
       
      }

  })

}



}
