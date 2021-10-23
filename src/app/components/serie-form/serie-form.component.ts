import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../model/serie";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {


  @Input() serieToEdit: Serie | undefined;
  @Output() formSubmitted: EventEmitter<Serie>;
  @Input() submitLabel: string;

  form: FormGroup;
  serie: Serie;

  constructor() {
    this.serie = new Serie('', new Date(), 0,'', '','',[]);
    this.form = new FormGroup({});
    this.formSubmitted = new EventEmitter<Serie>();
    this.submitLabel = '';
  }

  ngOnInit(): void {

    if (this.serieToEdit) {
      this.serie = this.serieToEdit;
    }
    else {
      this.serie = new Serie('', new Date(), 0,'', '','',[]);
    }

    this.initForm();
  }

  onSubmitForm(): void {
    if (this.form.valid) {
      this.formSubmitted.emit(this.serie);
    }
  }

  private initForm(): void {

    this.form.addControl(
      'name',
      new FormControl(
        null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      )
    );

    this.form.addControl(
      'description',
      new FormControl(
        null, [Validators.required, Validators.minLength(5), Validators.maxLength(450)]
      )
    );

    this.form.addControl(
      'dateBeginFirstSeason',
      new FormControl(
        null,
        [Validators.required]
      )
    );

    this.form.addControl(
      'numberSeason',
      new FormControl(
        null,
        [Validators.required]
      )
    );

    this.form.addControl(
      'review',
      new FormControl(
        null,
        [Validators.required, Validators.minLength(50), Validators.maxLength(850)]
      )
    );

    this.form.addControl(
      'pictureSerie',
      new FormControl(
        null,
        [Validators.required]
      )
    );
  }

}

