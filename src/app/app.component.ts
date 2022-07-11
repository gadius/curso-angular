import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'gender': new FormControl('female'),
      }),

    });
  }

  onSubmit(){

  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
    /*
    *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"
    =>
    *ngFor="let hobbyControl of getControls(); let i = index"

    */
  }


}
