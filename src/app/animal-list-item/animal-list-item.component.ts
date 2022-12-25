import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.css']
})
export class AnimalListItemComponent implements OnInit {
  @Input() animal: Animal;
  @Output() marked = new EventEmitter();
  @Output() hideAnimals: EventEmitter <Animal> = new EventEmitter;

  constructor( private route: ActivatedRoute ) {
    this.animal = {
      id: 1,
      name: '',
      fed: false,
      fav: false
    }
  }

  ngOnInit(): void {

  }

  changeFed(animal: Animal): void{
    animal.fed = !animal.fed
  }

  hideAnimal(animal: Animal): void {
    this.hideAnimals.emit(animal)
  }
}
