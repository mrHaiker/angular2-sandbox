import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise'

export interface IPhones {
  id: number,
  images: string[],
  name: string,
  description: string,
  price: number
}

@Injectable()
export class PhoneService {
  private apiUrl = 'api/phones';
  phones: string[] = [];

  constructor(
    private _http: Http
  ) {}

  getPhones(): Promise<IPhones> {
    return this._http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data )
      .then(phones => this.phones = phones)
      .catch(this.handleError);
  }

  private handleError(error): any {
    console.error(`Произошла ошибка загрузки ${error}`);
    return Promise.reject(error.message || error);
  }

}
