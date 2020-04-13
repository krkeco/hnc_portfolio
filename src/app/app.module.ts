import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { IdentityComponent } from './identity/identity.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { VideographyComponent } from './videography/videography.component';
import { MenuComponent } from './menu/menu.component';
import { FeatureComponent } from './feature/feature.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureItemComponent } from './feature-item/feature-item.component';
import { QuoteComponent } from './quote/quote.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialBarComponent } from './social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    BlogComponent,
    LandingComponent,
    ContactComponent,
    PhotographyComponent,
    AboutComponent,
    VideographyComponent,
    MenuComponent,
    FeatureComponent,
    FeatureItemComponent,
    QuoteComponent,
    YoutubePlayerComponent,
    SocialBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    NgbModule,
    HttpClientModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
