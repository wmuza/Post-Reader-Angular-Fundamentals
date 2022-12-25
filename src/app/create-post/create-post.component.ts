import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  title: string = ''
  body: string = ''
  public: boolean = false;
  @Output() addPost: EventEmitter <Post> = new EventEmitter()

  ngOnInit(): void{

  }

  submitForm(): void{
    const post: Post = {
      title: this.title,
      body: this.body,
      votes: 0,
      userId: 1,
      id: 1
    }

    this.addPost.emit(post)
    this.title = ''
    this.body = ''
  }

}
