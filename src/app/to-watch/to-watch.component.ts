import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent implements OnInit {


  username : String = "mariontotottes"

  toWatchList: any =[{movie_title: "Big Boobs", user_name:"mariontotottes"}, {movie_title: "j'ai le doigt qui pue", user_name:"reyducul"}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
