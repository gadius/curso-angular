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
  //forbiddenUsernames = ['Chris', 'Ana'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectname: new FormControl(
        null,
        [Validators.required],
        this.forbiddenProjectNamesValidatorSync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectstatus: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(
      this.signupForm.value.projectname,
      this.signupForm.value.email,
      this.signupForm.value.projectstatus,
    );
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
    /*
    *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"
    =>
    *ngFor="let hobbyControl of getControls(); let i = index"

    */
  }

  forbiddenProjectNamesValidator(control: FormControl): { [s: string]: boolean } {
    const arr_names: string[] = ['Test'];

    if (arr_names.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null; //At this point form control is valid
  }


  forbiddenProjectNamesValidatorSync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectname: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
