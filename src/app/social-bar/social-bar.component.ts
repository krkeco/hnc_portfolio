import { Component, Input, OnInit } from '@angular/core';

import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faInstagramSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css'],
})
export class SocialBarComponent implements OnInit {
  faCoffee = faCoffee;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagramSquare = faInstagramSquare;

  @Input('fbUrl') fbUrl: string;
  @Input('inUrl') inUrl: string;
  @Input('igUrl') igUrl: string;
  @Input('youUrl') youUrl: string;
  @Input('eUrl') eUrl: string;

  @Input('style') style: string;

  getStyle() {
    let classes = 'link ';
    classes += this.style;
    return classes;
  }

  constructor() {}

  ngOnInit(): void {}
}
