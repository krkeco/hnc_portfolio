import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css'],
})
export class FeatureItemComponent implements OnInit {
  @Input('url') url: string;
  @Input('text') text: string;
  @Input('title') title: string;
  @Input('route') route: string;

  constructor() {}

  ngOnInit(): void {}
}
