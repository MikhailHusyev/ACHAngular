import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/upload-file.service';
import { IResponse } from '../models/error-response.model';

@Component({
  selector: 'app-image-upload-with-preview',
  templateUrl: './file.component.html',
  styles: ['file.component.css']
})
export class FileComponent implements OnInit {
    title = 'ach-validator-app';

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  fileContent: String;
  textValue: String = 'TEST'

  public async onChange(fileList: FileList){
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    //await this.uploadService.putFile(file)
    fileReader.onloadend = function(x) {
      var array = fileReader.result.toString()
      self.fileContent = array
    }
    fileReader.readAsText(file)
  }

  public onTextChange(value: any){
    console.log(value)
  }
}
