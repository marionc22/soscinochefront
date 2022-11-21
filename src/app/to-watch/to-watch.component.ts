import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.css']
})
export class ToWatchComponent {

  username : String = "mariontotottes"

  toWatchList: any =[];
  
  // constructor(private apiService: ApiService) { }

  // ngOnInit(): void {
  //    this.apiService.getToWatch().subscribe((data)=>{
  //       console.log(data);
  //       this.toWatchList=data
  //     });
  //     console.log(this.toWatchList)
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/toWatch').subscribe(data => this.toWatchList = data);
  }
  }

