import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeMemeComponent } from './make-meme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [MakeMemeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [MakeMemeComponent]
})
export class MakeMemeModule { }
