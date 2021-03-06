import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: string[];

  constructor(private service: ArtistService) { }

  ngOnInit() {
    this.artists = this.service.getArtists();
  }

}
