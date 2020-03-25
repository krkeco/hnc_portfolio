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
    harvest: "Harvest Festival",
    vbs: "VBS",
    kaytim: "Kay&Tim",
    thanksgiving: "Thanksgiving",
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
      './assets/img/photography/ensenada/25_orig.jpg',
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
    rome: [
      './assets/img/photography/rome/Rome1.jpg',
      './assets/img/photography/rome/Rome2.jpg',
      './assets/img/photography/rome/Rome3.jpg',
      './assets/img/photography/rome/Rome4.jpg',
      './assets/img/photography/rome/Rome5.jpg',
      './assets/img/photography/rome/Rome6.jpg',
    ],
    harvest: [],
    vbs: [],
    kaytim: [],
    thanksgiving: [],
  };

  constructor(private Activatedroute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    
    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('Query params ', this.id);
    });
  }
}
