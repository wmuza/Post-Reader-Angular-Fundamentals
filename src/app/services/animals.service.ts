import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  getAnimals(){
    return [
      {
        id: 1,
        name: 'Panda',
        fed: true,
        fav: false
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true,
        fav: false
      },
      {
        id: 3,
        name: 'Lion',
        fed: false,
        fav: true
      }
    ]
  }
}
