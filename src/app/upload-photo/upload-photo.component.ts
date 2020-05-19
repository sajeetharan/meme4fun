import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss'],
})
export class UploadPhotoComponent implements OnInit {
  @Output() fileUrl: EventEmitter<string>;
  @Output() file : EventEmitter<object>;

  constructor() {
    this.fileUrl = new EventEmitter();
    this.file = new EventEmitter();
  }

  ngOnInit(): void {}

  onFileChange(fileEvent: Event) {
    const file = (fileEvent.target as HTMLInputElement).files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        this.fileUrl.emit(e.target.result as string);
        this.file.emit(file);
      };

      fileReader.readAsDataURL(file);
    }
  }
}
