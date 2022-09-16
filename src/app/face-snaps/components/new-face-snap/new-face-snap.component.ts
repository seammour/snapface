import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapform!: FormGroup
  faceSnapPreviews$!: Observable<FaceSnap>;
  urlRegex!: RegExp ;
  
  constructor( private builder: FormBuilder, 
              private router: Router,
              private faceSnapService: FaceSnapsService) { }

  ngOnInit(): void {
    this.urlRegex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapform = this.builder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    });
    this.faceSnapPreviews$ = this.snapform.valueChanges.pipe(
      map(formValue => ({...formValue, createdDate: new Date(),id: 0, snaps: 0 }))
    );

  }

  onSubmitForm(){

    this.faceSnapService.addFaceSnap(this.snapform.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
    console.log(this.snapform.value);

  }

  

}
