import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoolBack } from '../coolBack/coolBack.component';
import { GraphicText } from '../graphicText/graphicText.component';
import { MenuButton } from '../menu-button/menu-button.component';
import { PeerAudio } from '../peer-audio/peer-audio.component';
import { SiteTitle } from '../site-title/site-title.component';
import { Spacer } from '../spacer/spacer.component';
import { Icon } from '../icon/icon.component';
import { Core } from '../Core';
@NgModule({
  declarations: [
    AppComponent,
    Icon,
    GraphicText,
    MenuButton,
    PeerAudio,
    SiteTitle,
    Spacer,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Core,],
  bootstrap: [AppComponent]
})
export class AppModule { }
