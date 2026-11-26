import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as $ from 'jquery';
// import * as Chart from 'chart.js'
import { ChartType } from 'chart.js';

declare const CanvasJS: any;
@Component({
    selector: 'app-duka-graphs',
    templateUrl: './duka-graphs.component.html',
    styleUrls: ['./duka-graphs.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaGraphsComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[][] = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

