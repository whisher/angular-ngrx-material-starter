// Core
import { Component, ViewChild } from '@angular/core';

// Material
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'admin-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminLayoutMainComponent {
  @ViewChild('drawer', { read: MatDrawer, static: false }) drawer!: MatDrawer;
  constructor() {}
  onToggle() {
    this.drawer.toggle();
  }
}
