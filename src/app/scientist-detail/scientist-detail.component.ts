import { Component, Input } from '@angular/core';
import { Scientist } from '../scientist';

@Component({
  selector: 'app-scientist-detail',
  templateUrl: './scientist-detail.component.html',
  styleUrls: ['./scientist-detail.component.css']
})
export class ScientistDetailComponent {

  @Input() scientist?: Scientist;
  
}
