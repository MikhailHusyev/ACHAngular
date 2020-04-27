import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from '../services/upload-file.service'
import { IResponse } from '../models/error-response.model';


@Component({
    selector: 'home-page',
    templateUrl: 'homepage.component.html'
})

export class HomePageComponent implements OnInit {
    buttonText = 'Search';

    constructor(private uploadFileService: UploadFileService) { }

    ngOnInit() {

    }

    fileContent: Array<String>;
    response: IResponse;
    file: FileList;

    public async onChange(fileList: FileList): Promise<any> {
      let file = fileList[0];
      let fileReader: FileReader = new FileReader();
      let self = this;

      this.response = await this.uploadFileService.putFile(file)

      fileReader.onloadend = function(x) {
       var result = fileReader.result.toString().replace(/ /g, "\u00a0").split("\r\n");
        self.fileContent = result;
      }
      fileReader.readAsBinaryString(file);
    }
}
