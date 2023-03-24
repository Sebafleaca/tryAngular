import { Component, OnInit } from '@angular/core';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.css']
})
export class ScientistsComponent implements OnInit {

  scientists: Scientist[] = [];
  selectedScientist?: Scientist;

  constructor(private scientistService: ScientistService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getScientists();
  }

  getScientists(): void {
    this.scientistService.getScientists()
      .subscribe(scientists => this.scientists = scientists);
  }

  onSelect(scientist: Scientist): void {
    this.selectedScientist = scientist;
    this.messageService.add(`ScientistComponent: Selected scientist id=${scientist.id}`);
  }
  
}
