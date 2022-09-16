import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    //la version optimisé :  comme le put renvoie le facesnap 
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
  }

  /*      if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => {this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
          this.buttonText = 'Oops, unSnap!';
          })
          ).subscribe();
      
      } else {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => {this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
          this.buttonText = 'Oh Snap!';
          })
          ).subscribe();
        
      }  */
  }
}
