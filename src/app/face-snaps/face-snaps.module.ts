import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps.routing';



@NgModule({
  declarations: [
    NewFaceSnapComponent,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule,
    FormsModule
  ],
  exports: [
    NewFaceSnapComponent,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ]
})
export class FaceSnapsModule { }
