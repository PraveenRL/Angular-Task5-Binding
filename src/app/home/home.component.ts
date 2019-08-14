import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  p1 = 'Data Binding';
  a1 = 'Property';
  a2 = 'Event';
  a3 = 'One-Way';
  a4 = 'Two-Way';
  p2 = "Copyright (C) 2013 -www.ieatcss.com";

}
