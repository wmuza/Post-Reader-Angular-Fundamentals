export class Post {
  userId: number
  id: number
  title: string
  body: string
  votes: number

  constructor() {
    this.userId = 1
    this.id = 1
    this.title = ''
    this.body = ''
    this.votes = 1
  }
}
