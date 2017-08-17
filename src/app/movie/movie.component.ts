import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movie.service"
import {Movie} from "./movie"
import {Router} from "@angular/router"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]

})
export class MovieComponent implements OnInit {

  constructor(private  movieService: MovieService, private router:Router) {
  }

  on: boolean = false;
  movieSrc:string;
  errorMessage: string;
  videoSource: string;
  movieString: string;
  movieArray: Movie[];
  recentMovieArray: Movie[] = [];
  private temp: Movie[];
  title = 'app';
  default_image = './src/assets/img/no_cover_image.png';

  slideConfig = {'slidesToShow': 8, 'slidesToScroll': 2};


  afterChange(e) {
    console.log('afterChange');
  }


  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe(
        // movieString => this.movieString = JSON.stringify(movieString.entries),
        movieString => this.movieArray = movieString.entries,
        error => this.errorMessage = <any>error
      );
  }

  movieClick(movie: Movie) {
    this.recentMovieArray.push(movie);
    this.on = !this.on;
    this.movieSrc= movie.contents[0].url;
  }
  closeMovie(){
    this.on = !this.on;
  }



}
