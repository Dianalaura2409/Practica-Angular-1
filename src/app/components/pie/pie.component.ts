import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
fecha :Date = new Date;
  constructor() { }

  ngOnInit(): void {
  }

}
