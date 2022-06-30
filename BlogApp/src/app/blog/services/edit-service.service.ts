import { Injectable, Output } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EditService {
  constructor() {}
  title: string = '';
  content: string = '';

  @Output()
  getTitle() {
    return this.title;
  }

  setTitle(loadTitle: string) {
    this.title = loadTitle;
  }

  @Output()
  getContent() {
    return this.content;
  }
  setContent(loadContent: string) {
    this.content = loadContent;
  }
}
