// src/app/app.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResponseService } from './response-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private responseService: ResponseService) {}

  submitForm(formData: any): void {
    this.responseService.addResponse(formData);

    // Download responses as JSON file
    this.responseService.downloadResponsesAsJson();
  }
}
