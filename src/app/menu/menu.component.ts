import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { StylingService } from '../styling.service';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  faCoffee = faCoffee;
  faBars = faBars;
  constructor(private stylingService: StylingService) {}

  ngOnInit(): void {}
}
