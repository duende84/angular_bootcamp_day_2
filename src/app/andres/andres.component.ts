import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andres',
  templateUrl: './andres.component.html',
  styleUrls: ['./andres.component.css']
})
export class AndresComponent implements OnInit {
  colors:string[] = ['red', 'blue', 'yellow'];
  words:string[] = ['algo algo', 'oto oto', 'ABCD EFG'];
  color:string = '';
  constructor() { }

  ngOnInit() {
  }

}
