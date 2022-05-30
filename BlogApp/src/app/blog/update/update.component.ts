import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  responseData: string;
  constructor(private http: HttpClient) {}
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';
  ngOnInit(): void {}

  updatePosts(title: string) {
    this.http.get(this.firebaseUrl).subscribe((responseData) => {
      for (const key in responseData) {
        if (responseData[key].content === title) {
          this.responseData[key].update();
          console.log('match');
        }
      }
    });
  }
}
