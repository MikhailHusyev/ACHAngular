import { Component, OnInit, Input } from '@angular/core';
import { IResponse } from '../models/error-response.model';

@Component({
  selector: 'app-specification',
  templateUrl: 'specification.component.html',
  styleUrls: ['specification.component.css']
})

export class SpecificationComponent implements OnInit {
  constructor() { }
  @Input() response: IResponse
  ngOnInit() { }
}
