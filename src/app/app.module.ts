import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistService } from './artist.service';
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
  { path: '', component: ArtistListComponent },
  { path: 'artists/:id', component: ArtistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
