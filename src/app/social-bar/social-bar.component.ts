import { Component, Input, OnInit } from '@angular/core';

import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent implements OnInit {
  faCoffee = faCoffee;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagramSquare = faInstagramSquare;
  
  @Input('style') style: string;

  getStyle() {
    let classes = "link "
    classes += this.style;
    return classes;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
