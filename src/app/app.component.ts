import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'iwdf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') class = 'text-body';
}
