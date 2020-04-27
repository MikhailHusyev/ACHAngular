import { Component, OnInit, Input } from '@angular/core';
import { IError } from '../models/responses/error.model';

@Component({
  selector: 'app-errorbox',
  templateUrl: './errorbox.component.html',
  styleUrls: ['./errorbox.component.css']
})
export class ErrorboxComponent implements OnInit {

  constructor() { }

  @Input() errors : Array<IError>

  ngOnInit(): void {
  }

  setErrors(errors: Array<IError>){
    this.errors = errors
  }
}
