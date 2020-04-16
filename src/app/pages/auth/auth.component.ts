import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [``]
})
export class AuthComponent implements OnInit {

  @Input() errorMessages: string[];
  form: FormGroup;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit() {
    this.errorMessages = [];
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('form submitted', this.form.value);
    }
  }


}
