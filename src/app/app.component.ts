import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Ana'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {}

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
    /*
    *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"
    =>
    *ngFor="let hobbyControl of getControls(); let i = index"

    */
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null; //At this point form control is valid
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'email': 1});
        }
        else{
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
