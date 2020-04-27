import { Component, OnInit, Input } from '@angular/core';



@Component({
    selector: 'home-page',
    templateUrl: 'homepage.component.html'
})

export class HomePageComponent implements OnInit {
    buttonText = 'Search';

    constructor() { }

    ngOnInit() {

    }

    fileContent: Array<String>;
    file: FileList;

    public onChange(fileList: FileList): any {
        let file = fileList[0];
        let fileReader: FileReader = new FileReader();
        let self = this;
        this.file = fileList;
        fileReader.onloadend = function(x) {
          var array = fileReader.result.toString().split("\n");
          self.fileContent = array;
        }
        fileReader.readAsText(file);
      }
}
