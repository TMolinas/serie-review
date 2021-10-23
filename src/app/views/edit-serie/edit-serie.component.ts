import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Serie} from "../../model/serie";
import {SeriesService} from "../../services/series/series.service";

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {

  serie: Serie | undefined;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.seriesService
      .getSerieById(id)
      .then((serieFound: Serie) => {
        this.serie = serieFound
      });
  }

  askToEditSerie(editedSerie: Serie) {
    this.seriesService
      .editSerie(editedSerie)
      .then(() => {
        this.router.navigate(['/series', editedSerie.id])
      });
  }

}
