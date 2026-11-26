import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-editaccount',
    templateUrl: './editaccount.component.html',
    styleUrls: ['./editaccount.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditaccountComponent implements OnInit {
  userData;

  constructor() { }

  ngOnInit() {
  }
  Register(){

  }
  onfileSelected(){
    
  }

}
