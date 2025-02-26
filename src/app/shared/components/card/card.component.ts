import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Input() nextRoute!: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  navigate() {
    this.router.navigate([this.nextRoute + this.card.id]);
  }
}
