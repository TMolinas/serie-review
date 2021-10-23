import {Component, Input, OnInit} from '@angular/core';
import {SeriesService} from "../../services/series/series.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: '[app-series-table-line]',
  templateUrl: './series-table-line.component.html',
  styleUrls: ['./series-table-line.component.css']
})
export class SeriesTableLineComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() dateBeginFirstSeason: Date;
  dateBeginString: string | null;


  constructor(private seriesService: SeriesService, public datePipe: DatePipe) {
    this.id = 0;
    this.name = '';
    this.dateBeginFirstSeason = new Date();
    this.dateBeginString = '';
  }

  ngOnInit(): void {
    this.dateBeginString = this.datePipe.transform(this.dateBeginFirstSeason, 'dd-MM-yyyy');
  }


  onClickDeleteSerie() {
    this.seriesService.deleteSerie(this.id);
  }


}

