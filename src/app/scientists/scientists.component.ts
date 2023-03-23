import { Component } from '@angular/core';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';

@Component({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.css']
})
export class ScientistsComponent {
  /* First tutorial:

  scientist: Scientist = {
    id: 0,
    name: 'Klaudios Ptolemaios',
    birth: 100,
    death: 175,
    nationality: 'Alexandrian'
  };
  */
  
  /* Second tutorial
  
  scientists = SCIENTISTS;
  */

  scientists: Scientist[] = [];
  selectedScientist?: Scientist;

  constructor(private scientistService: ScientistService) {}

  ngOnInit(): void {
    this.getScientists();
  }

  getScientists(): void {
    this.scientistService.getScientists()
      .subscribe(scientists => this.scientists = scientists);
  }

  onSelect(scientist: Scientist): void {
    this.selectedScientist = scientist;
  }
  
}
