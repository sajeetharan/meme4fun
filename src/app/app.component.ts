import { Component, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meme-generator';
  imgUrl: string;
  output: any;
  thing;
  fileToUpload: File;
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(private http: HttpClient) { }
  removeImage() {
    this.thing = {};
  }

  onPhotoUpload(imgUrl: string) {
    this.imgUrl = imgUrl;
    this.makeRequest();
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  onPhotoPicked(file:any) {
    this.fileToUpload = file;
    this.makeRequest();
    this.stepper.selected.completed = true;
    this.stepper.next();
  }
  makeRequest() {
    let data, contentType;
      if (typeof this.imgUrl=== 'string' && !this.imgUrl.startsWith('data')) {
            data = { url: this.imgUrl};
            contentType = 'application/json';
          } else {
            data = this.fileToUpload;
            contentType = 'application/octet-stream';
          }
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': contentType,
              'Ocp-Apim-Subscription-Key': ''
            })
          };
    this.http
      .post(
        'https://Southeastasia.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&returnFaceId=false&returnFaceLandmarks=true&language=en"',
        data,
        httpOptions
      )
      .subscribe(body => {
        if (body && body[0]) {
          console.log(body);
          this.output = body;
          console.log(this.output);
        
        } else {

        }
      });
  }
}
