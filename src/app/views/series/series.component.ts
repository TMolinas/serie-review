import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Serie} from "../../model/serie";
import {SeriesService} from "../../services/series/series.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
  series: Array<Serie>;
  seriesSub: Subscription;

  constructor(private seriesService: SeriesService) {
    this.series = [];
    this.seriesSub = new Subscription();


  }

  ngOnInit(): void {
    this.seriesSub = this.seriesService.series.subscribe(
      (series: Array<Serie>) => {
        this.series = series;
      }
    );
  }


  ngOnDestroy() {
    this.seriesSub.unsubscribe();
  }
}
