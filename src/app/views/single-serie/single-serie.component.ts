import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SeriesService} from "../../services/series/series.service";
import {Serie} from "../../model/serie";
import {DatePipe} from "@angular/common";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Remark} from "../../model/remark";

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {

  serie: Serie | undefined;
  dateBeginString: string | null;

  form: FormGroup;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private router: Router, public datePipe: DatePipe, private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    this.dateBeginString = '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.seriesService
      .getSerieById(id)
      .then((serie: Serie) => {
        this.serie = serie;
        this.dateBeginString = this.datePipe.transform(this.serie.dateBeginFirstSeason, 'dd-MM-yyyy');

        }
      );
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required]
    });
  }


  onSubmitRemarkForm() {
    const formValue = this.form.value;
    const newRemark = new Remark(
      formValue['title'],
      new Date(),
      formValue['author'],
      formValue['content']
    );
    const id = this.route.snapshot.params.id
    this.seriesService
      .addRemark(newRemark, id)
      .then(() => {
        this.form.reset();
      });


  }
}
