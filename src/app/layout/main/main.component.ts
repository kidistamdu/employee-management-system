import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  
})
export class MainComponent implements OnInit {
  @Input() sidebarExpanded: boolean = false;

  
 
  ngOnInit():void  {
    
  }

}

  
 
  

  




