import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseurl="https://api.themoviedb.org/3";
  apikey="309ceadf0585f926f9c0f1b48e0837de";


  bannerApiData(): Observable<any> {

    return this.http.get<any>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
   
  }

  
  // trendingmovieapidata 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }


    // searchmovive
    getSearchMovie(data: any): Observable<any> {
      console.log(data, 'movie#');
  
      return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
    }
  
      // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

    // action 
    fetchActionMovies(): Observable<any> {
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
    }
  

}

