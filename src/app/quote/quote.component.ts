import { Component, OnInit } from '@angular/core';
import { faQuoteLeft  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	faQuoteLeft = faQuoteLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
