import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['./header.component.sass'],

})
export class HeaderComponent implements OnInit{

  // For when the component is being created
  constructor() { 
    console.log('Header component being created...')
  }

  // Once the componenet is created do something
  ngOnInit() {
    console.log('Header component created')
  }

  /**
   * VARIABLES
   * If you wanna use them in HTML, do {{ variableName }}
   */
  name = 'Initial value'
  counter = 0
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  /**
   * FUNCTIONS
   */
  changeName() {
    // this is refearing to this component
    this.name = 'Now I have changed'
  }

  sum() {
    this.counter ++
  }

  addElement() {
    this.arr.push(Math.random())
  }

}
