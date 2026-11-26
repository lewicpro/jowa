import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
