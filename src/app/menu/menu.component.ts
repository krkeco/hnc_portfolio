import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private stylingService: StylingService) {}

  ngOnInit(): void {}
}
