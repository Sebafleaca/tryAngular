import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Scientist } from './scientist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const scientists = [
      { id: 1, name: 'Mikolaj Kopernik', birth: 1473, death: 1543, nationality: 'Polish'},
      { id: 2, name: 'Tyge Brahe', birth: 1546, death: 1601, nationality: 'Danish'},
      { id: 3, name: 'Galileo Galilei', birth: 1564, death: 1642, nationality: 'Italian'},
      { id: 4, name: 'Rene Descartes', birth: 1596, death: 1650, nationality: 'Italian-French'},
      { id: 5, name: 'Giovanni Domenico Cassini', birth: 1625, death: 1712, nationality: 'Italian-French'},
      { id: 6, name: 'Robert Boyle', birth: 1627, death: 1691, nationality: 'Irish'},
      { id: 7, name: 'Isaac Newton', birth: 1642, death: 1726, nationality: 'English'},
      { id: 8, name: 'Gottfried Wilhelm Leibnitz', birth: 1646, death: 1716, nationality: 'German'},
      { id: 9, name: 'Edmond Halley', birth: 1656, death: 1742, nationality: 'English'}
    ]
    return(scientists);    
  };

  constructor() { }

  genId(scientists: Scientist[]): number {
    return scientists.length > 0 ? Math.max(...scientists.map(scientist => scientist.id)) + 1 : 1;
  }
}
