import { Component, OnInit } from '@angular/core';
import { faCoffee, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent implements OnInit {
	faPlay = faPlay;
  source;
  requestFullScreen;
  iframe;
  isFullScreen;
  youBtn;

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');


    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.source = "http://www.youtube.com/embed/6L0R9-jSLuI?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&playlist=IsBInsOj8TY"
    this.iframe  = document.getElementById('youtube');
    this.iframe.className =   "hidden"

  }

  playFullscreen (){
  	console.log('pla first')
    
    this.requestFullScreen = this.iframe.requestFullScreen || this.iframe.mozRequestFullScreen || this.iframe.webkitRequestFullScreen;
    if (this.requestFullScreen) {
      this.requestFullScreen.bind(this.iframe)();
    }
    this.isFullScreen = !this.isFullScreen
      if(this.isFullScreen){
      this.iframe.src = this.source;
      this.iframe.className =   "videoContainer__video"

    }else{
      
      this.iframe.src = null;
      console.log('reset source?')
      this.iframe.className =   "hidden"
    }
  }
}
