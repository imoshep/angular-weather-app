import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  showFavs: boolean = true;
  toggleShowFavs() {
    this.showFavs = !this.showFavs;
    console.log(this.showFavs);
  }
  constructor() {}

  ngOnInit(): void {}
}
