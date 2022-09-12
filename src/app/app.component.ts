import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //interval$! : Observable<number>;
  interval$! : Observable<string>;

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  ngOnInit() {
   
    //this.operateurBasNiveau();
    this.operateurHautNiveau();
    //pour avoir un nombre à chaque second
    //this.interval$ = interval(1000);
   //
    // premiere exo
    //const interval$ = interval(1000);
    //setTimeout(
    //  () => interval$.subscribe(value => console.log(value)),
    //   3000);
  }

  logger (message: string): void{
    console.log(`Trace stack:${message}`);
  }

  operateurBasNiveau(): void{
  //operateur Bas Niveau
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3===0),
      map(value => value %2 ===0 ? `je suis ${value} et je pair`:`je suis ${value} et je impair`)
      ,tap(x =>this.logger(x))
    );
  }

  /** 

  les qutre opérateur de haut niveau sont:

  */
  operateurHautNiveau(): void{
    //operateur Haut Niveau
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      //
      //switchMap(color => this.getTrainObservable$(color)),
      //Assure le parallelisme et tous les trains arrive 
      //mergeMap(color => this.getTrainObservable$(color)),
      // Assure la mise en serie -- tous les trais arrive mais dans l'ordre d'allumage des feux
      concatMap(color => this.getTrainObservable$(color)),
      //exhaustMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();

    }
    getTrainObservable$(color: 'rouge' | 'jaune') {
      const isRedTrain = color === 'rouge';
      isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
      const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
      console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
      return of({ color, trainIndex }).pipe(
        delay(isRedTrain ? 5000 : 6000)
      );
    }
  
    translateColor(color: 'rouge' | 'jaune') {
      return color === 'rouge' ? 'red' : 'yellow';
    }
}
