import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapform!: FormGroup
  faceSnapPreviews$!: Observable<FaceSnap>;
  constructor( private builder: FormBuilder) { }

  ngOnInit(): void {
    this.snapform = this.builder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });
    this.faceSnapPreviews$ = this.snapform.valueChanges.pipe(
      map(formValue => ({...formValue, createdDate: new Date(),id: 0, snaps: 0 }))
    );

  }

  onSubmitForm(){
    console.log(this.snapform.value);

  }

}
