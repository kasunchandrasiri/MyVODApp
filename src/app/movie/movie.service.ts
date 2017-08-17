import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Movie} from './movie';

@Injectable()
export class MovieService {
  constructor(private http: Http) {

  }

  on = false;
  private moviesUrl = 'https://demo2697834.mockable.io/movies';

  getMovies() {
    return this.http.get(this.moviesUrl)
      .map(res => <Movie[]> res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
