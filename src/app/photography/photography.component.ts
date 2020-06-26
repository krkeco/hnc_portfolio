import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
})
export class PhotographyComponent implements OnInit {
  
  id;
  title = {
    sandiego: 'California Vibes',
    ensenada: 'Ensenada in B&W',
    paris: 'Lovers in Paris',
    rome: 'Streets of Rome',
    harvestfestival: 'Harvest Festival',
    covid: 'Covid Life',
    lifeoc: 'Life in OC',
    vbs: 'VBS',
    kaytim: 'Kay&Tim',
    thanksgiving: 'Thanksgiving',
  };
  images = {
    sandiego: [
      './assets/img/photography/california/2-sd_orig.jpg',
      './assets/img/photography/california/2-sd_orig_(1).jpg',
      './assets/img/photography/california/12-copy_orig.jpg',
      './assets/img/photography/california/16_orig.jpg',
      './assets/img/photography/california/17_orig.jpg',
      './assets/img/photography/california/21_orig.jpg',
      './assets/img/photography/california/22b_orig.jpg',
      './assets/img/photography/california/23_2_orig.jpg',
      './assets/img/photography/california/25_orig.jpg',
    ],
    ensenada: [
      './assets/img/photography/ensenada/1-mx-7_1_orig.jpg',
      './assets/img/photography/ensenada/2a-mx-44_orig.jpg',
      './assets/img/photography/ensenada/2-mx_orig.jpg',
      './assets/img/photography/ensenada/3-mex_orig.jpg',
      './assets/img/photography/ensenada/3-mx_orig.jpg',
      './assets/img/photography/ensenada/dad-bw_orig.jpg',
      './assets/img/photography/ensenada/dad_orig.jpg',
      './assets/img/photography/ensenada/mx-2_orig.jpg',
    ],
    paris: [
      './assets/img/photography/paris/1-dameday_orig.jpg',
      './assets/img/photography/paris/1-paris_orig.jpg',
      './assets/img/photography/paris/2-parislove_orig.jpg',
      './assets/img/photography/paris/2-royals_2_orig.jpg',
      './assets/img/photography/paris/3-parisnight_3_orig.jpg',
      './assets/img/photography/paris/3-paris_orig.jpg',
      './assets/img/photography/paris/3-royals_orig.jpg',
    ],
    covid: [
      './assets/img/photography/covid/1.jpg',
      './assets/img/photography/covid/2.jpg',
      './assets/img/photography/covid/3.jpg',
      './assets/img/photography/covid/4.jpg',
      './assets/img/photography/covid/5.jpg',
      './assets/img/photography/covid/6.jpg',
      './assets/img/photography/covid/7.jpg',
    ],
    lifeoc: [
      './assets/img/photography/lifeoc/1.jpg',
      './assets/img/photography/lifeoc/2.jpg',
      './assets/img/photography/lifeoc/3.jpg',
      './assets/img/photography/lifeoc/4.jpg',
      './assets/img/photography/lifeoc/5.jpg',
      './assets/img/photography/lifeoc/6.jpg',
      './assets/img/photography/lifeoc/7.jpg',
      './assets/img/photography/lifeoc/8.jpg',
      './assets/img/photography/lifeoc/9.jpg',
      './assets/img/photography/lifeoc/10.jpg',
      './assets/img/photography/lifeoc/11.jpg',
    ],
    harvestfestival: [
      './assets/img/photography/harvestfestival/1.jpg',
      './assets/img/photography/harvestfestival/2.jpg',
      './assets/img/photography/harvestfestival/3.jpg',
      './assets/img/photography/harvestfestival/4.jpg',
      './assets/img/photography/harvestfestival/5.jpg',
      './assets/img/photography/harvestfestival/6.jpg',
      './assets/img/photography/harvestfestival/7.jpg',
      './assets/img/photography/harvestfestival/8.jpg',
      './assets/img/photography/harvestfestival/9.jpg',
      './assets/img/photography/harvestfestival/10.jpg',
      './assets/img/photography/harvestfestival/11.jpg',
      './assets/img/photography/harvestfestival/12.jpg',
    ],
    vbs: [
      './assets/img/photography/vbs/1.jpg',
      './assets/img/photography/vbs/2.jpg',
      './assets/img/photography/vbs/3.jpg',
      './assets/img/photography/vbs/4.jpg',
      './assets/img/photography/vbs/5.jpg',
      './assets/img/photography/vbs/6.jpg',
      './assets/img/photography/vbs/7.jpg',
      './assets/img/photography/vbs/8.jpg',
      './assets/img/photography/vbs/9.jpg',
      './assets/img/photography/vbs/10.jpg',
      './assets/img/photography/vbs/11.jpg',
    ],
    kaytim: [],
    thanksgiving: [],
  };

  constructor(private Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      if (!this.id) {
        this.id = 'sandiego';
      }
      this.photoContainer = "photo-container view-padding-top";
      if(this.id == 'sandiego'
        || this.id == 'ensenada'
        || this.id == 'paris'
        || this.id == 'rome'){
        console.log('squareify')
        this.photoContainer = "photo-container-square view-padding-top";
      }
      console.log('Query params ', this.id);
    });
  }
}
