import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditService } from '../services/edit-service.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private http: HttpClient, private editService: EditService) {}
  @Input()
  blogTitle: string = this.editService.getTitle();
  @Input()
  blogContent: string = this.editService.getContent();
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';

  ngOnInit(): void {}
  createPost(postData: { title: string; content: string }) {
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
    });
    this.editService.setTitle(this.blogTitle);
    this.editService.setContent(this.blogContent);
  }

  successMessage() {
    alert('Post Added Successfully!!');
    this.blogContent = '';
    this.blogTitle = '';
  }
}
