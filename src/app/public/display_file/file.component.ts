import { Component, OnInit } from '@angular/core';

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
  fileContent: Array<String>;

  public onChange(fileList: FileList): any {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      var array = fileReader.result.toString().split("\n");
      self.fileContent = array;
    }
    fileReader.readAsText(file);
  }
}
