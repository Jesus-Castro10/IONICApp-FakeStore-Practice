import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-searchbar',
  templateUrl: './header-searchbar.component.html',
  styleUrls: ['./header-searchbar.component.scss'],
  standalone: false
})
export class HeaderSearchbarComponent implements OnInit {

  @Input() title!: string
  @Input() backRoute!: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigate() {
    console.log("In navigate");
    this.router.navigate(["/intro"]);
  }
}
