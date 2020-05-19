import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as p5 from 'p5';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-meme',
  templateUrl: './make-meme.component.html',
  styleUrls: ['./make-meme.component.scss'],
})
export class MakeMemeComponent implements AfterViewInit, OnChanges {
  @Input() imageUrl: string;

  @ViewChild('imageCanvas') imageCanvas: ElementRef;
  memeSketch: p5;
  form: FormGroup;
  topTextElement: p5;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topText: [],
      bottomText: [],
      fontSize: [20, Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imageUrl.currentValue && !changes.imageUrl.firstChange) {
      this.memeSketch.remove();
      this.form.reset();
      this.initCanvas();
    }
  }

  makeMeme() {
    this.memeSketch.remove();
    this.initCanvas();
  }

  private initCanvas() {
    this.memeSketch = new p5((p: p5) => {
      const imageUrl = this.imageUrl;
      p.setup = () => {
        p.createCanvas(600, 400);
        p.loadImage(imageUrl, (img) => {
          p.image(img, 0, 0, 600, 400);

          const values = this.form.getRawValue();
          const impactFont = p.loadFont('/assets/fonts/impact.ttf');
          p.textSize(Number(this.form.get('fontSize').value));
          p.fill(255, 255, 255, 255);
          p.textStyle('bold');
          p.textFont(impactFont);
          p.stroke(0);
          p.strokeWeight(5);

          if (values.topText) {
            p.textAlign('center', 'top');
            p.text(values.topText, p.width / 2, 15);
          }

          if (values.bottomText) {
            p.textAlign('center', 'bottom');
            p.text(values.bottomText, p.width / 2, p.height - 15);
          }
        });
      };
    }, this.imageCanvas.nativeElement);
  }

  downloadMeme() {
    if (this.form.valid) {
      this.memeSketch.save('meme');
    }
  }
}
