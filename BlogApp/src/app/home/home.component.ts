import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ReadComponent } from '../blog/read/read.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
