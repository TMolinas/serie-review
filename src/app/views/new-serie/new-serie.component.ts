import { Component, OnInit } from '@angular/core';
import {Serie} from "../../model/serie";
import {SeriesService} from "../../services/series/series.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-serie',
  templateUrl: './new-serie.component.html',
  styleUrls: ['./new-serie.component.css']
})
export class NewSerieComponent implements OnInit {

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAddSerie(serie: Serie): void {
    this.seriesService
      .addSerie(serie)
      .then(() => {
        this.router.navigateByUrl('series');
      });

  }

}
