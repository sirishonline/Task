import { Component, ViewChild, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Resolve } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
