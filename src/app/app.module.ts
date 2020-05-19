import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MakeMemeModule } from './make-meme/make-meme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MakeMemeModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
