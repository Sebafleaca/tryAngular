import { Component } from '@angular/core';
import { Scientist } from '../scientist';

@Component({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.css']
})
export class ScientistsComponent {
  scientist: Scientist = {
    id: 1,
    name: 'Klaudios Ptolemaios',
    birth: 100,
    death: 175,
    nationality: 'Alexandrian'
  };
}
