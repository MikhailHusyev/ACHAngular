import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IResponse } from '../models/error-response.model'
import { IForm } from '../models/form.model'


@Injectable({providedIn: 'root'})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  errorModel: IResponse

  putFile<T>(uploadFile: File): Promise<T>{
    const url = 'http://localhost:8080/api/v1/file/validate'
    let formdata = new FormData();
    formdata.append('file', uploadFile)
    console.log("Being CALLED")
    return this.httpClient.post<T>(url, formdata).toPromise()

  }

}
