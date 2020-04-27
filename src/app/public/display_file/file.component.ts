import { Component, OnInit, Input} from '@angular/core';
import { Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-image-upload-with-preview',
  templateUrl: './file.component.html',
  styles: ['file.component.css']
})
export class FileComponent implements OnInit {
    title = 'ach-validator-app';

  constructor() { }


  ngOnInit() {
  }
  @Input() fileContent: Array<String>;


}
