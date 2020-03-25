import { Component, OnInit } from '@angular/core';
import { faCoffee, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 	faCoffee = faCoffee;
	faLinkedin = faLinkedin;
	faEnvelope = faEnvelope;
	faFacebook = faFacebook;
	faInstagramSquare = faInstagramSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
