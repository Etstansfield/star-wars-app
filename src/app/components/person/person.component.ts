import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../classes/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  
  constructor() { }

  ngOnInit() {
  }

}
