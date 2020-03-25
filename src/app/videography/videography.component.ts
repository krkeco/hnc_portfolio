import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.css'],
})
export class VideographyComponent implements OnInit {
  id;
	titles = {
		tom: "Archives: TOMStudio",
		lifestyle: "Lifestyle"
	}

  constructor(private Activatedroute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    
    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('Query params ', this.id);
    });
  }
}
