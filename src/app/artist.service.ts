export class ArtistService {
  private artists: string[];

  constructor() {
    this.artists = [
      "Pink Floyd",
      "Led Zeppelin",
      "Prince"
    ];
  }

  getArtists(): string[] {
    return this.artists;
  }
}
