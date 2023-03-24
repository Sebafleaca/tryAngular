import { Component, OnInit } from '@angular/core';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';

@Component({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.css']
})
export class ScientistsComponent implements OnInit {

  scientists: Scientist[] = [];

  constructor(private scientistService: ScientistService) { }

  ngOnInit(): void {
    this.getScientists();
  }

  getScientists(): void {
    this.scientistService.getScientists()
      .subscribe(scientists => this.scientists = scientists);
  }

}
