import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent implements OnInit {

  username : String = "reyducul"

  watchedList: any =[{movie_title: "Big Boobs", user_name:"mariontotottes"}, {movie_title: "j'ai le doigt qui pue", user_name:"reyducul"}];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
