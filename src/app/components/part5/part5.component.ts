import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.sass']
})
export class Part5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disableStatus: boolean = true
  buttonType = 'submit'
  formInput: String = 'Text in input'
  inputSelection: String = 'Seat'
  optionsArray = ['Toyota', 'Hyundai', 'Seat']

  changeType(){
    this.buttonType = 'action'
  }

  changeStatus(status){
    this.disableStatus = status
  }

  log(event){
    console.log(event);
  }

}
