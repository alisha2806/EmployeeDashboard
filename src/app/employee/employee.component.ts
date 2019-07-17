import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class EmployeeComponent implements OnInit {
  show = false;

  public listitem;
  public containeritem;
  constructor(private apiService: ApiService) { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }


  ngOnInit() {
    this.getEmployeeGroups();
  }

  public getEmployeeGroups() {
    this.apiService.getEmployeeData().subscribe(res => {
      this.listitem = res.employees;
      console.log('res', this.listitem);
    });
  }

  onSelect(item) {
    this.containeritem = item;
    console.log("this.containeritem", this.containeritem);
  
  }
  public changeFont(val) {    
    this.containeritem.popularity = val;
    console.log("this.containeritem.popularity", this.containeritem.popularity);
  }
}
