import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AceValueDialogComponent } from './ace-value-dialog/ace-value-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameControlsComponent,
    UserInfoComponent,
    CardDisplayComponent,
    AceValueDialogComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
