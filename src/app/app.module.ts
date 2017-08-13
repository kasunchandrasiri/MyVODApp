import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {VideoplayerComponent} from "./videoplayer/videoplayer.component"
import {SlickModule} from 'ngx-slick';
import {FormsModule} from '@angular/forms';
import {routes} from './app.router';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SlickModule.forRoot(),
    routes,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
