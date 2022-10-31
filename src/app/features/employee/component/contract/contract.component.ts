import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpContracts } from 'src/app/model/employee';
import { EmployeeContractsServices } from '../../service/employee-contracts.services';


@Component({
  selector:'app-contract',
  templateUrl:'./contract.component.html', 
  
})

export class ContractComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : EmpContracts= new EmpContracts();
  employeeId!: number
  empList : EmpContracts[] = [];
  file!: File
  contracts = [];
  allContracts : EmpContracts[] = [];
  

 


  constructor(
    private empContractService : EmployeeContractsServices,
    private formBuilder : FormBuilder,
    private route: ActivatedRoute ){}

  ngOnInit(): void {
   
    // this.getContractByEmpId;

    this.empDetail = this.formBuilder.group({

      employeeId:[''],
      title:[''],
      startingDate:[''],
      endingDate: [''],
      id:[''],
      contractsImage:[''],
     
  
    });

    this.getAllContract()
 
  
  
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
      this.empObj.contractsImage = reader.result as string
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  addContract(){
     
  this.empObj.employeeId= this.route.snapshot.params['id'];
  this.empObj.title = this.empDetail.value.title;
  this.empObj.startingDate= this.empDetail.value.startingDate;
  this.empObj.endingDate= this.empDetail.value.endingDate;
  this.empObj.id= this.allContracts.length+1;
  this.empObj.contractsImage= this.empDetail.value.contractsImage;

  console.log(this.empObj)

  this.empContractService.addContract(this.empObj).subscribe({
   next:(res)=> {
     this.getAllContract();
     this.empDetail.reset();
    
   },
  })
  }
 
  getAllContract(){
    this.empContractService.getAllContract().subscribe(
      {
      next:(res)=> {
        this.allContracts = res;
        this.empList = res.filter(v => v.employeeId == this.route.snapshot.params['id']);
        console.log(this.empList)
      },
    })
  
  }

  updateContract(){
    this.empContractService.updateContract(this.empObj).subscribe(
    {
      next:(res)=>{
        this.getAllContract();
      }
    })
  }

  deleteContract(cont: EmpContracts){
this.empContractService.deleteContract(cont).subscribe({
  next:(res) => {
    alert('Employee deleted successfully')
    this.getAllContract();

}
})

}
  editContract(cont : EmpContracts){

    this.empDetail.controls['employeeId'].setValue(cont.employeeId);
    this.empDetail.controls['title'].setValue(cont.title);
    this.empDetail.controls['startingDate'].setValue(cont.startingDate);
    this.empDetail.controls['endingDate'].setValue(cont.endingDate);
    this.empDetail.controls['contractsImage'].setValue(cont.contractsImage);
    
    

    this.empObj.employeeId = this.empDetail.value.employeeId;
    this.empObj.title = this.empDetail.value.title;
    this.empObj.startingDate = this.empDetail.value.startingDate;
    this.empObj.endingDate = this.empDetail.value.endingDate;
    this.empObj.contractsImage = this.empDetail.value.contractsImage;

   

}

// getContractByEmpId(){
  
//     this.employeeId = this.route.snapshot.params['id'];
//     this.empContractService.getContractByEmpId(this.employeeId).subscribe(
//       data => {
//         // this.contracts = data
// console.log(data, 'data')
//       }
//     )
 
// }

}
