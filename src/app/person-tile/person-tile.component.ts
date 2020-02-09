import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-tile',
  templateUrl: './person-tile.component.html',
  styleUrls: ['./person-tile.component.css']
})
export class PersonTileComponent implements OnInit {

  @Input()
  person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
