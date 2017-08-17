import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {SlickModule} from 'ngx-slick';
import {FormsModule} from '@angular/forms';
import {routes} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SlickModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
