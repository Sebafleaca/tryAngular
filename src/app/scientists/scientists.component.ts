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

  constructor(private scientistService: ScientistService) {}

  scientists: Scientist[] = [];

  getScientists(): void {
    this.scientists = this.scientistService.getScientists();
  }
  
  ngOnInit(): void {
    this.getScientists();
  }

  selectedScientist?: Scientist;
  onSelect(scientist: Scientist): void {
    this.selectedScientist = scientist;
  }
  
}
