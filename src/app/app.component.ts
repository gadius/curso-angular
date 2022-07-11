import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  suggestUserName() {

    const suggestedName = 'Superuser';
    /* THIS REPLACES ALL FORM
    this.signupForm.setValue({
      userData: { username: suggestedName, email: '' },
      questionAnswer: '',
      gender: 'male',
      secret:''
    });
    */
   //this updates specific input on form
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  /*
  onSubmit(f: NgForm){
    console.log(f);
  }
  */
  onSubmit() {
    console.log(this.signupForm);
  }
}
