import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent  {
  searchText = '';
  movieList: any = [];
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/movies').subscribe(data => this.movieList = data);
  }
  
    
  }

 