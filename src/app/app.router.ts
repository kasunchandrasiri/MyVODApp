import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./movie/movie.component";
import {VideoplayerComponent} from "./videoplayer/videoplayer.component";

export const router: Routes = [
  {path: '', redirectTo: 'movie', pathMatch: 'full'},
  {path:'movie',component:MovieComponent},
  {path:'videoplayer/:url',component:VideoplayerComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)
