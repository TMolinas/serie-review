import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './views/error/error.component';
import { SeriesComponent } from './views/series/series.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SeriesTableComponent } from './components/series-table/series-table.component';
import { SeriesTableLineComponent } from './components/series-table-line/series-table-line.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { NewSerieComponent } from './views/new-serie/new-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import {DatePipe} from "@angular/common";
import { RemarksAreaComponent } from './components/remarks-area/remarks-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ErrorComponent,
    SeriesComponent,
    SingleSerieComponent,
    SeriesTableComponent,
    SeriesTableLineComponent,
    SerieFormComponent,
    NewSerieComponent,
    EditSerieComponent,
    ErrorsFormComponent,
    RemarksAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
