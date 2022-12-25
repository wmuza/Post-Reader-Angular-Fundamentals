import { Component } from '@angular/core';
import { Animal } from '../models/animal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  animalList: Animal[] = [];
  orderby: string = '';

  // Pass query parameters to Router.navigate using queryParams.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AnimalsService: AnimalsService  ) {}

  ngOnInit(): void {
    // Component initialization code here
    this.animalList = this.AnimalsService.getAnimals()

    this.route.queryParams
      .subscribe(params => {
        this.orderby = params['orderby'];
      }
    );
  }

  markAsFavorite(animal: Animal): void {
    let selectedAnimal = this.animalList[this.animalList.indexOf(animal)];
    selectedAnimal.fav = !selectedAnimal.fav
  }

  hideAnimal(animal: Animal): void{
    this.animalList = this.animalList.filter(a => a.id != animal.id)
  }

  // Pass query parameters to Router.navigate using queryParams.
  goToPosts() {
    this.router.navigate(['/posts'], { queryParamsHandling: 'preserve' });
  }

}
