import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhoneService} from "../_services/phone.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  providers: [PhoneService],
})


export class DetailPageComponent implements OnInit {
  page:string;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['elem'];
    });

    this.getPhones().then(res => {
      console.log(res);
    })
  }

  getPhones() {
    return this.phoneService.getPhones();
  }

}
