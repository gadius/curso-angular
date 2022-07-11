import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  subscription_default_option = 'advanced';
  user = {
    email: '',
    subscription: '',
    password:'',
  };

  submitted : boolean = false;

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
