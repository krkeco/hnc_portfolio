import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hannah-nacole';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "video",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/icons/video.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "photo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/icons/polaroid.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/icons/brush.svg")
    );
  }
}
