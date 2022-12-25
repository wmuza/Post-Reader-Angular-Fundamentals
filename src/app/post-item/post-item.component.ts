import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter;
  orderby: string = '';

  constructor( private route: ActivatedRoute ) {
    this.post = {
      userId: 1,
      id: 0,
      title: '',
      body: '',
      votes: 1
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.orderby = params['orderby'];
      }
    );
  }

  upvote(post: Post) {
    post.votes += 1;
    return post;
  }

  downvote(post: Post) {
    post.votes -= 1;
    return post;
  }

  hide(post: Post) {
    this.hidePost.emit(post);
    return post;
  }
}
