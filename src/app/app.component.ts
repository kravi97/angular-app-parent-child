import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output-app';
  submittedData: any;

  handleFormSubmit(data: any) {
    this.submittedData = data;
  }
}
