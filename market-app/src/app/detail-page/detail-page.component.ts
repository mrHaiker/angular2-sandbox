import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})

interface IPhones {
  name: string,
  description: string,
  price: number
}

export class DetailPageComponent implements OnInit {
  page:string;
  phoneData: IPhones[];

  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['elem'];
    });

    console.log(this.getPhones());
  }
  //TODO: Find and import Promise module
  getPhones(): Promise<IPhones[]> {
    return this.http.get('./app/phones.json')
      .toPromise()
      .then(res => {
         this.phoneData = res.json().data as IPhones[];
      })
  }

}
