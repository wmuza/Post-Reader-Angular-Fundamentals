import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(){
    return [
      {
        name: 'Spain',
        population: 46754778
      },
      {
        name: 'New Zealand',
        population: 4822233
      },
      {
        name: 'United States of America',
        population: 331002651
      }
    ]
  }
}
