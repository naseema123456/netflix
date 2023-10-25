import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
    
   }


  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();


  }

    bannerData() {
      this.service.bannerApiData().subscribe((result) => {

        console.log(result, 'bannerresult#');
        
        this.bannerResult = result.results;
      });
    }

    trendingData() {
      this.service.trendingMovieApiData().subscribe((result) => {
        console.log(result, 'trendingresult#');
        this.trendingMovieResult = result.results;
        // this.trendingMovieResult
      });
    }

    // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  
  }

