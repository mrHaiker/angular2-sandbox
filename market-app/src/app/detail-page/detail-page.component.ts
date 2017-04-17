import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhoneService, IPhones} from "../_services/phone.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  providers: [PhoneService],
})

export class DetailPageComponent implements OnInit {
  page: string;
  models: any;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['elem'];
      this.getCurrentPhoneData(this.page);
    });
  }

  getPhones() {
    return this.phoneService.getPhones();
  }

  getCurrentPhoneData(brand) {
    this.getPhones().then(res => {
      this.models = res[brand] as IPhones;
    });
  }

}
