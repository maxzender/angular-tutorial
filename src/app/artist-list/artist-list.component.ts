import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: string[];

  constructor() { }

  ngOnInit() {
    this.artists = [
      "Pink Floyd",
      "Led Zeppelin",
      "Prince"
    ];
  }

}
