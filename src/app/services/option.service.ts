import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  apiUrl = 'https://localhost:5001/api/options/';

  constructor(private htppClient: HttpClient) {}

  getOptions(): Observable<ListResponseModel<Option>> {
    return this.htppClient.get<ListResponseModel<Option>>(
      this.apiUrl + 'getall'
    );
  }

  getOptionsById(
    parentid: number,
    grandparentid: number
  ): Observable<ListResponseModel<Option>> {
    let newPath =
      this.apiUrl +
      'getbyparentidandgrandparentid?parentid=' +
      parentid +
      '&grandparentid=' +
      grandparentid;
    return this.htppClient.get<ListResponseModel<Option>>(newPath);
  }

  
}
