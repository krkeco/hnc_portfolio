import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})


export class FeatureComponent implements OnInit {

 
 







	features = [
		{
			title:"PHOTOGRAPHY",
			text: "Photos captured from my travels. Contains photography from community events and other lifestyle photos as well.",
			url: ".com",
			route: "/photography"
		},
		{
			title:"VIDEOGRAPHY",
			text: "See archive files of videography and heavy video editting work for a creative arts / dance ministry called TOMStudios. Plan to bring a lifestyle one someday.",
			url: ".com",
			route: "/videography"
		},
		{
			title:"DESIGN",
			text: "Design work, namely, logo and literature development for companies, community and non-proft events.If you’re passionate about an event and in need of a logo, let me know.",
			url: ".com",
			route: "/identity"
		},
		
	]

  constructor() { }

  ngOnInit(): void {
  }

}
