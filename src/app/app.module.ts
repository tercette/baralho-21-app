import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CardDisplayComponent } from './card-display/card-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameControlsComponent,
    UserInfoComponent,
    CardDisplayComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
