import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private http: HttpClient) {}
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';

  ngOnInit(): void {}
  createPost(postData: { title: string; content: string }) {
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }
}
