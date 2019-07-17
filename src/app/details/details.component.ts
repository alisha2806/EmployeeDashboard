import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() Inputitem;
  @Output() popularityUpdate = new EventEmitter();
    
  constructor() { }

  ngOnInit() {
    console.log(this.Inputitem);
  }

  updateSize(val) {
    this.popularityUpdate.emit(val);
     console.log("val", val);
  }

}
