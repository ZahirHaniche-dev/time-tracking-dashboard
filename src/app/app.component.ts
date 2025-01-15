import { Component, signal } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-card-list';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Signal contenant la liste des cartes
  cardList = signal<Card[]>(CARDS);

  // Signal pour la période active (daily, weekly, monthly)
  activeTimeframe = signal<'daily' | 'weekly' | 'monthly'>('weekly');

  // Méthode pour changer le filtre
  changeTimeframe(timeframe: 'daily' | 'weekly' | 'monthly') {
    this.activeTimeframe.set(timeframe);
  }
}
