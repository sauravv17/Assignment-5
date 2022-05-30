import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(private http: HttpClient) {}
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';

  ngOnInit(): void {}
  onDeletePost() {
    this.http.delete(this.firebaseUrl).subscribe((response) => {
      console.log('Posts deleted: ' + response);
      // this.fetchedPosts = [];
    });
  }
}
// //   onDeletePost(title: any) {
//   this.http
//   .delete(this.firebaseUrl, {
//     params: {
//       data: title,
//     },
//   })
//   .subscribe((response) => {
//     console.log('Posts deleted: ' + response);
//     // this.fetchedPosts = [];
//   });
// }
