import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  title: string = 'Posts';
  posts: Post[] = [];
  panel: boolean = false;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const post: Post = res[index];
        post["votes"] = 1;
      }

      this.posts = res;
    });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post)
  }

  showHidePanel(): void {
    this.panel = !this.panel
  }

  // Pass query parameters to Router.navigate using queryParams.
  goToAnimals(): void {
    this.router.navigate(['/animals'], { queryParams: { orderby: 'price',category:'fiction' } });
  }

}
