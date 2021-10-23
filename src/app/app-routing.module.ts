import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {SeriesComponent} from "./views/series/series.component";
import {SingleSerieComponent} from "./views/single-serie/single-serie.component";
import {ErrorComponent} from "./views/error/error.component";
import {NewSerieComponent} from "./views/new-serie/new-serie.component";
import {EditSerieComponent} from "./views/edit-serie/edit-serie.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'series', canActivate: [AuthGuard], component: SeriesComponent},
  {path: 'series/new', canActivate: [AuthGuard], component: NewSerieComponent},
  {path: 'series/:id', canActivate: [AuthGuard], component: SingleSerieComponent},
  {path: 'series/:id/edit', canActivate: [AuthGuard], component: EditSerieComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
