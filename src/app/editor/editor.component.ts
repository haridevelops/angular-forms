import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public name: FormControl = new FormControl('');

  public forms: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Hari');
  }

  onSubmit() {
    console.warn(this.forms.value);
  }
}
