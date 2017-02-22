import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class BasketService {
  private id: number[] = [];

  constructor(
    private _http: Http
  ) { }



}
