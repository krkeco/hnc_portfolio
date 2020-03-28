import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { filter } from 'rxjs/operators';

import {StylingService} from '../styling.service'

@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.css'],
})
export class VideographyComponent implements OnInit {
  id;
  titles = {
    tom: "Meditations",
    lifestyle: "Lifestyle"
  }
  subtitles = {
    tom: "…because something is always cooking in our studio",
    lifestyle: "Lifestyle"
  }

  // reqYoutubePlayer() {
  //   console.log("let's do this!")

  //   let player = document.getElementById('yotube-player')
  //   if (!player.fullscreenElement) {
  //     player.requestFullscreen().catch(err => {
  //         alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
  //       });
  //     } else {
  //       document.exitFullscreen();
  //     }
    

  // }

  constructor(private Activatedroute: ActivatedRoute, private stylingService: StylingService ) {
  }

  ngOnInit(): void {
    
    this.stylingService.setMenuStyles('video')

    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('Query params ', this.id);
    });
  }
  ngOnDestroy(): void{
    this.stylingService.setMenuStyles('')
  }
}
