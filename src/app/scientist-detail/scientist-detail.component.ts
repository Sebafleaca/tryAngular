import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Scientist } from '../scientist';
import { ScientistService } from '../scientist.service';

@Component({
  selector: 'app-scientist-detail',
  templateUrl: './scientist-detail.component.html',
  styleUrls: ['./scientist-detail.component.css']
})
export class ScientistDetailComponent {

  @Input() scientist?: Scientist;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private scientistService: ScientistService
  ) { }

  ngOnInit(): void {
    this.getScientist();
  }

  getScientist(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.scientistService.getScientist(id)
      .subscribe(scientist => this.scientist = scientist);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if (this.scientist) {
      this.scientistService.updateScientist(this.scientist)
        .subscribe(() => this.goBack());
    }

  }
}
