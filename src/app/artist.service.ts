import { Injectable } from '@angular/core';

@Injectable()
export class ArtistService {
  private artists: string[];

  constructor() {
    this.artists = [
      "Pink Floyd",
      "Led Zeppelin",
      "Prince"
    ];
  }

  getArtist(id: number): string {
    return this.artists[id];
  }

  getArtists(): string[] {
    return this.artists;
  }
}
