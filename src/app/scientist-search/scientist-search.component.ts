import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';

@Component({
  selector: 'app-scientist-search',
  templateUrl: './scientist-search.component.html',
  styleUrls: ['./scientist-search.component.css']
})
export class ScientistSearchComponent implements OnInit {

  scientists$!: Observable<Scientist[]>;
  private searchTerms = new Subject<string>();

  constructor(private scientistService: ScientistService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.scientists$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.scientistService.searchScientists(term)),
    );
  }

}
