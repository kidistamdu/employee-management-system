import { Component, Input, OnInit} from '@angular/core';
import { EmpContracts } from 'src/app/model/employee';



@Component({
  selector:'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']

 
})
export class ContractDetailComponent implements OnInit {


    @Input()
    empDetail!: EmpContracts


    ngOnInit():void{
        
    }

}
   