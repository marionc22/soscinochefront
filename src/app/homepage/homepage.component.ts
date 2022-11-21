import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  searchText = '';
  movieList: any = [];
    constructor(private apiService: ApiService) { }
    ngOnInit() {
      this.apiService.getNews().subscribe((data)=>{
        console.log(data);
        this.movieList=data
      });
  
    
  }
}
 