import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from '../../pipes/uppercase.pipe'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass'],
  providers: [UppercasePipe]
})
export class FilmsComponent implements OnInit {

  filmList = [
    {id: 0, title: 'Pacific Rim: Insurrection', price: 6.80},
    {id: 1, title: 'Black Panther', price: 5.95},
    {id: 2, title: 'Maze Runner', price: 4.10},
    {id: 3, title: 'Ready Player One', price: 8.70},
    {id: 4, title: 'Avengers: Infinity War', price: 7.40},
    {id: 5, title: 'Deadpool 2', price: 6.10},
    {id: 6, title: 'Missed Call', price: 7.50},
  ]

  constructor(
    private _upper:UppercasePipe
  ) { }

  ngOnInit() {
    console.log(this._upper.transform(this.filmList[0].title))
  }

}
