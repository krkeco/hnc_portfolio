import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
