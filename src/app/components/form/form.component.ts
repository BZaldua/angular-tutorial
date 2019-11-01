import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  signupForm: FormGroup

  constructor(
    private _builder:FormBuilder
  ) { 
    this.signupForm = this._builder.group({
      name: [''],
      user: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    })
  }

  send(values){
    console.log(values)
  }

}
