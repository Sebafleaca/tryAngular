import { Component } from '@angular/core';
import { Scientist } from '../scientist';
import { SCIENTISTS } from '../mock-scientists';

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
  scientists = SCIENTISTS;

  selectedScientist?: Scientist;
  onSelect(scientist: Scientist): void {
    this.selectedScientist = scientist;
  };
  
}
