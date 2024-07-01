import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  model = {
    name: '',
    email: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(form.value);
    }
  }
}
