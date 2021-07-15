import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';


@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColor = new EventEmitter<Color>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      name: '',
    });
  }

  doSubmitColor() {
    this.submitColor.emit({
      ...this.colorForm.value,
    });
  }

}
