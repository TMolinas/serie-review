import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../model/serie";

@Component({
  selector: 'app-series-table',
  templateUrl: './series-table.component.html',
  styleUrls: ['./series-table.component.css']
})
export class SeriesTableComponent implements OnInit {

  @Input() series: Array<Serie>;

  constructor() {
    this.series = [];
  }

  ngOnInit(): void {
  }

}
