// src/app/response.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private responses: any[] = [];

  constructor() {}

  addResponse(response: any): void {
    this.responses.push(response);
  }

  getResponses(): any[] {
    return this.responses;
  }

  downloadResponsesAsJson(): void {
    const jsonData = JSON.stringify(this.responses, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'form_responses.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
