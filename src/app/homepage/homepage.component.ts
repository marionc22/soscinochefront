import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit  {
  searchText = '';
  movieList: any = [];
username= localStorage.getItem('username')
password= localStorage.getItem('password')

 showWatched: number = -1
showToWatch: number = -1
constructor(private http: HttpClient, private router:Router) {
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  http.get('http://localhost:8080/movies',{headers}).subscribe(data => this.movieList = data);
  console.log(this.movieList)
}

ngOnInit(): void {
  if(this.username==null ){
    this.router.navigate(["/login"])
   }
}
  shuffle(){
    this.movieList = this.movieList.sort(() => Math.random() - 0.5)

  }


  addWatched(id: number) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password)})
    this.showWatched=id
    return this.http.post('http://localhost:8080/watched',
        {username: this.username,movie: {id: id} },{headers}
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
      
  }

  addToWatch(id: number) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password)})
    this.showToWatch=id
    return this.http.post('http://localhost:8080/towatch',
        {username: this.username,movie: {id: id}},{headers}
    ).subscribe(
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
    
  }

}