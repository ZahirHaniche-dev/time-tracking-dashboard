import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card';
import { CARDS } from './mock-card-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  cardList: Card[] = CARDS;
  
  ngOnInit() {
    console.table(this.cardList);
  }
}
