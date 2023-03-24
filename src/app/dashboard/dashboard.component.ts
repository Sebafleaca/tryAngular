import { Component, OnInit } from '@angular/core';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scientists: Scientist[] = []

  constructor(private scientistService: ScientistService) { }

  ngOnInit(): void {
    this.getScientists();
  }

  getScientists(): void {
    this.scientistService.getScientists()
      .subscribe(scientists => this.scientists = scientists.slice(0, 4));
  }
}
