import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/auth/firebase.service';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl:'./sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

 
  
  constructor( private router: Router,  public auth : FirebaseService)  { }
  email: any;
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  ngOnInit():void  {
    
 

  }

 

}

  
 
  

  




