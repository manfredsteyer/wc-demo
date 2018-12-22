import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-option',
  templateUrl: './my-option.component.html',
  styleUrls: ['./my-option.component.css']
})
export class MyOptionComponent implements OnInit {

  @Input() value: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
