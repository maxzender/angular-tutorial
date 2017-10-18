import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistService } from './artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
