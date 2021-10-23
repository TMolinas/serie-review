import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Serie} from "../../model/serie";
import {DatePipe} from "@angular/common";
import {Remark} from "../../model/remark";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  series: BehaviorSubject<Array<Serie>>;


  constructor(public datePipe: DatePipe) {
    const seriesToPush = [
      new Serie('See',
        new Date('2019-11-1'),
        2,
        'See, Jour noir au Québec, est une série télévisée américaine, créée par Steven Knight et diffusée simultanément dans le monde entier sur AppleStore',
        'Convaincante et immersive, la série promet une aventure de science-fiction épique qui couvrira plusieurs générations, pleine d\'impressionnantes scènes de batailles et qui dévoile un futur dystopique. Le tout avec un cachet visuel spectaculaire digne du cinéma, qui donne à l\'ensemble une grande ampleur. ',
        'https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,437,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/series/apple-tv-see-a-voir-critique-3824075/91149132-1-fre-FR/Apple-TV-See-a-voir-critique.jpg',
        [new Remark('Extra', new Date(), 'Téva',"L'histoire est passionnante! ")]
      ),
      new Serie('Rick and Morty',
        new Date('2013-12-02'),
        5,
        'Rick et Morty (Rick and Morty) est une série d\'animation pour adultes américaine créée par Justin Roiland et Dan Harmon',
        "Sous des allures potaches, la série est bien plus noire qu’il n’y paraît : quel sens donner à la vie quand on sait qu’une foule de clones de soi-même évoluent dans le cosmos ? Comment trouver sa place dans cet Univers alors qu’il est si difficile de la trouver au sein de sa propre famille ? Ces interrogations, sur lesquelles viennent se greffer de gros gags, reposent sur l’aspect multidimentionnel des personnages, donc sur toutes les nuances de l’humain. On ressort lessivé devant tant de questions métaphysiques… et aussi mort de rire. ",
        'https://fr.web.img6.acsta.net/pictures/18/10/31/17/34/2348073.jpg',
        []
      ),
      new Serie('Les Simpson',
        new Date('1989-12-17'),
        34,
        'Les Simpson (The Simpsons) sont une série télévisée d\'animation américaine pour adultes créée par Matt Groening',
        'Depuis 1989,  Les Simpson  fait des ravages aux quatre coins du monde. Cette série animée créée par Matt Groening dépeint, avec brio et une pointe de sarcasme, les travers de l\'américain moyen.',
        'https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?fit=2000%2C1125',
        []
      )
    ];
    this.series = new BehaviorSubject<Array<Serie>>(seriesToPush);
  }

  getSerieById(serieId: number): Promise<Serie> {
    return new Promise<Serie>(
      (res, rej) => {

        const series = this.series.getValue();

        for (let serie of series) {
          if (serie.id == serieId) {
            res(serie);
            break;
          }
        }
      }
    );
  }

  addSerie(serieToAdd: Serie): Promise<void> {

    return new Promise<void>(
      (res, rej) => {

        setTimeout(() => {

          const series = this.series.getValue();
          series.push(serieToAdd);
          this.series.next(series);
          res();

        }, 500);

      }
    );
  }

  addRemark(remarkToAdd: Remark, idSerie: number): Promise<void> {

    return new Promise<void>(
      (res, rej) => {
        setTimeout( () => {
          const series = this.series.getValue();
          for (let serie of series) {
            if (serie.id == idSerie) {
              serie.remarks.push(remarkToAdd);
              this.series.next(series);
              res();
              break;
            }
          }
        }, 500)
      }
    )
  }

  editSerie(editedSerie: Serie): Promise<void> {

    return new Promise<void>(
      (res, rej) => {

        setTimeout(() => {

          const series = this.series.getValue();

          for (let [index, serie] of series.entries()) {
            if (serie.id === editedSerie.id) {
              series[index] = editedSerie;
              this.series.next(series);
              res();
              break;
            }
          }

        }, 500);

      }
    );

  }


  deleteSerie(serieIdToDelete: number) {

    const series = this.series.getValue();

    for (let [index, serie] of series.entries()) {
      if (serie.id === serieIdToDelete) {
        series.splice(index, 1);
        this.series.next(series);
        break;
      }
    }

  }

}
