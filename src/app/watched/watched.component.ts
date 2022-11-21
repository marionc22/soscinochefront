import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent  {

  username : String = "reyducul"

  watchedList: any =[];
  
  
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/watched').subscribe(data => this.watchedList = data);
  }
  }




