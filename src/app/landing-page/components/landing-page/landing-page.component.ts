import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(emailForm: NgForm): void{
    console.log('====================================');
    console.log(emailForm.value);

    console.log("juste la valeur de la propriete userEmail : "+ emailForm.controls['userEmail'].value);
    console.log('====================================');
  }

}
