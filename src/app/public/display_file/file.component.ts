import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-image-upload-with-preview',
  templateUrl: './file.component.html',
})
export class FileComponent implements OnInit {
    title = 'ach-validator-app';
  constructor(private http: HttpClient) { }
   
  ngOnInit() {
  }
  fileContent: string = '';

  public onChange(fileList: FileList): any {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result.toString();
    }
    fileReader.readAsText(file);
  }
}
